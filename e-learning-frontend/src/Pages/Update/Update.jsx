import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudentProfile } from "../../features/studentSlice";
import "./Update.css";
import { useEffect } from "react";
const Update = () => {
  const dispatch = useDispatch();
  const { student, loading } = useSelector((state) => state.student);

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState("")

 

useEffect(() => {
  if (student) {
    setFormData({
      name: student.name || "",
      email: student.email || "",
      bio: student.bio || "",
      phone: student.phone || "",
      linkedIn: student.socialLinks?.linkedIn || "",
      github: student.socialLinks?.github || "",
      portfolio: student.socialLinks?.portfolio || "",
      profilePicture: null,
    });
  }
}, [student]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    Object.keys(formData).forEach((key) => {
      updatedData.append(key, formData[key]);
    });
    dispatch(updateStudentProfile(updatedData));
    setEditMode(false);
  };

  return (
    <div className="update-container">
      <h2 className="update-title">Update Profile</h2>

      <div className="update-profile-section">
        <label className="update-profile-label">
          <img 
            src={student?.profilePicture || "/default-avatar.png"} 
            alt="Profile" 
            className="update-profile-avatar"
          />
          {editMode && <input type="file" accept="image/*" onChange={handleFileChange} />}
        </label>
      </div>

      <form className="update-form" onSubmit={handleSubmit}>
        <div className="update-form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} disabled={!editMode} />
        </div>

        <div className="update-form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} disabled />
        </div>

        <div className="update-form-group">
          <label>Bio</label>
          <textarea name="bio" value={formData.bio} onChange={handleChange} disabled={!editMode}></textarea>
        </div>

        <div className="update-form-group">
          <label>Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} disabled={!editMode} />
        </div>

        <div className="update-form-group">
          <label>LinkedIn</label>
          <input type="url" name="linkedIn" value={formData.linkedIn} onChange={handleChange} disabled={!editMode} />
        </div>

        <div className="update-form-group">
          <label>GitHub</label>
          <input type="url" name="github" value={formData.github} onChange={handleChange} disabled={!editMode} />
        </div>

        <div className="update-form-group">
          <label>Portfolio</label>
          <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} disabled={!editMode} />
        </div>

        <div className="update-btn-group">
          {editMode ? (
            <>
              <button type="submit" className="update-save-btn" disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </button>
              <button type="button" className="update-cancel-btn" onClick={() => setEditMode(false)}>
                Cancel
              </button>
            </>
          ) : (
            <button type="button" className="update-edit-btn" onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Update;
