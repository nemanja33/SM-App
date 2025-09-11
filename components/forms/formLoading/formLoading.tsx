import React from 'react'
import styles from './styles.module.css'

export default function FormLoading() {
  return (
    <div>
      <form>
        <div>
          <div className={styles.skeletonField}>
            <div className={styles.skeletonLabel}></div>
            <div className={styles.skeletonInput}></div>
          </div>
        </div>
        <div>
          <div className={styles.skeletonField}>
            <div className={styles.skeletonLabel}></div>
            <div className={styles.skeletonInput}></div>
          </div>
        </div>
        <div>
          <div className={styles.skeletonField}>
            <div className={styles.skeletonLabel}></div>
            <div className={styles.skeletonInput}></div>
          </div>
        </div>
        <div className={styles.skeletonButton}></div>
      </form>
    </div>
  )
}