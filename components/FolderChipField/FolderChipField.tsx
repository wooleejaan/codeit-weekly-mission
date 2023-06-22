"use client";

import { IFolder } from "@/types/linkbrary";

import Fab from "./Fab";
import FolderChip from "./FolderChip";
import styles from "./FolderChipField.module.scss";

interface IFolderChipFieldProps {
  folders: IFolder[];
  currentTab: number;
  inView: boolean | null;
  isLinks: boolean;
}

const FolderChipField = ({
  folders,
  currentTab,
  inView,
  isLinks,
}: IFolderChipFieldProps) => {
  return (
    <div className={styles.folderChipFieldWrapper}>
      <div className={styles.chipWrapper}>
        {folders.map((folder) => {
          return (
            <FolderChip
              key={folder.id}
              toRoute={folder.id}
              name={folder.name}
              isSelected={currentTab === folder.id}
            />
          );
        })}
      </div>
      <Fab inView={inView} isLinks={isLinks} />
    </div>
  );
};

export default FolderChipField;