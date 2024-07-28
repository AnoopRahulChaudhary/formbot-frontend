function Folder({ folderId, folderName, setSelectedFolderId }) {
  return (
    <button onClick={() => setSelectedFolderId(folderId)}>{folderName}</button>
  );
}

export default Folder;
