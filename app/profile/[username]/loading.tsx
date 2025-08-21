import React from 'react'
import styles from './loading.module.css'

export default function UserLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.skeletonAvatar}></div>
      <div className={styles.skeletonName}></div>
      <div className={styles.skeletonPost}></div>
      <div className={styles.skeletonPost}></div>
      <div className={styles.skeletonPost}></div>
    </div>
  );
}