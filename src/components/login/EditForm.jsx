import React from "react";
import "./EditForm.css";

function EditForm() {
  return (
    <div>
      <div className="row">
        <div className="modal-dialog text-center">
          <div className="col-sm-12 main-section">
            <div className="modal-content">
              {/* <div className="col-12 user-img">
                <img src="" alt="iconuser" />
              </div> */}
              <div className="col-12 form-input">
                <form>
                  <h4>Edit your Profile</h4>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Lastname"
                    />
                    <button type="submit" className="btn btn-danger">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
