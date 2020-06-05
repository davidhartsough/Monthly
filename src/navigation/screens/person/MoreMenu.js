import React, { useState } from "react";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/auth";
import { MoreVertical } from "react-feather";
import NameEditor from "./NameEditor";
import { Modal, ModalMenu } from "../../../components/modal";
import "./MoreMenu.css";
import { toggleTheme, getTheme } from "../../../theme";

function MoreMenu({ logOut }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [editorVisible, setEditorVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const openEditor = () => setEditorVisible(true);
  const closeMenu = () => setMenuVisible(false);
  function closeAll() {
    setMenuVisible(false);
    setEditorVisible(false);
  }
  return (
    <>
      <div className="flex-center more-menu" onClick={openMenu}>
        <MoreVertical size={20} />
      </div>
      {editorVisible && <NameEditor close={closeAll} />}
      {menuVisible && (
        <Modal close={closeMenu} closeOnClick={true}>
          <ModalMenu
            options={[
              { title: "Edit name", onClick: openEditor },
              {
                title: `${getTheme() === "dark" ? "Dis" : "En"}able dark mode`,
                onClick: toggleTheme,
              },
              { title: "Sign out", onClick: logOut },
            ]}
          />
        </Modal>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(signOut()),
});
export default connect(null, mapDispatchToProps)(MoreMenu);
