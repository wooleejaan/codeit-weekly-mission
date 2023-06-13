"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import AddLinkModal from "@/components/Modals/AddLinkModal/AddLinkModal";

import styles from "./AddLinkBar.module.scss";

const AddLinkBar = () => {
  const [openAddLinkModal, setOpenAddLinkModal] = useState<boolean>(false);
  const [selectedLinkValue, setSelectedLinkValue] = useState<string>("");
  const linkInputRef = useRef<HTMLInputElement>(null);

  const handleSubmitOpenAddModal = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (linkInputRef.current) {
      setSelectedLinkValue(linkInputRef.current.value);
      setOpenAddLinkModal((prev) => !prev);
      linkInputRef.current.value = "";
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmitOpenAddModal}>
        <div className={styles.linkWrapper}>
          <div className={styles.linkIconWrapper}>
            <Image
              fill
              alt="add link"
              src="/assets/folder-link.svg"
              className={styles.image}
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              ref={linkInputRef}
              className={styles.input}
              type="text"
              placeholder="링크를 추가해 보세요"
            />
          </div>
        </div>
        <button className={styles.button} type="submit">
          추가하기
        </button>
      </form>

      {openAddLinkModal && (
        <AddLinkModal
          setOpenAddLinkModal={setOpenAddLinkModal}
          selectedLinkValue={selectedLinkValue}
        />
      )}
    </div>
  );
};

export default AddLinkBar;
