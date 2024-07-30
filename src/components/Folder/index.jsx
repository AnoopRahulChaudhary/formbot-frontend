function Folder({ folderId, folderName, setSelectedFolderId, formIds }) {
  function handleFolderDeleteOnClick(){
    
  }
  return (
    <div>
      <button onClick={() => setSelectedFolderId(folderId)}>
        {folderName}
      </button>
      <button onClick={handleFolderDeleteOnClick}>Delete {folderName}</button>
    </div>
  );
}

export default Folder;
