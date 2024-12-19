'use client';

import { constants } from '@constants';
import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss';

const { paths } = constants;

const enum Links {
  DOCTORS,
  NURSES,
}

export const Header = () => {
  const [active, setActive] = useState(Links.DOCTORS);
  return (
    <div className={styles.headerWrapper}>
      <Link
        href={paths.doctors}
        className={`${styles.navBtn} ${Links.DOCTORS === active && styles.active}`}
        onClick={() => setActive(Links.DOCTORS)}
      >
        Doctors List
      </Link>
      <Link
        href={paths.nurses}
        className={`${styles.navBtn} ${Links.NURSES === active && styles.active}`}
        onClick={() => setActive(Links.NURSES)}
      >
        Nurses List
      </Link>
    </div>
  );
};
