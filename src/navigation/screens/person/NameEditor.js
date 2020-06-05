import React, { useState } from "react";
import { connect } from "react-redux";
import { changeName } from "../../../store/actions/profile";
import { Modal } from "../../../components/modal";

function NameEditor({ close, profile, submit }) {
  const [name, setName] = useState(profile.name);
  const onChange = ({ target }) => setName(target.value);
  function onSubmit(e) {
    e.preventDefault();
    const submission = name.trim();
    if (submission.length > 1) {
      if (submission !== profile.name) submit(submission);
      close();
    }
  }
  return (
    <Modal close={close}>
      <form onSubmit={onSubmit} className="name-editor">
        <label>
          Name
          <input
            type="text"
            placeholder="Name"
            id="name-input"
            maxLength="70"
            minLength="3"
            autoFocus
            onChange={onChange}
            value={name}
          />
        </label>
        <div className="align-right">
          <button
            type="submit"
            className="primary"
            disabled={name.trim().length < 3 || name.length > 70}
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}

const mapStateToProps = ({ profile }) => ({ profile });
const mapDispatchToProps = (dispatch) => ({
  submit: (name) => dispatch(changeName(name)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NameEditor);
