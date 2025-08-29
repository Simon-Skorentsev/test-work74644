import type { Dispatch, SetStateAction } from 'react';

import { EnumSign } from '@/types/auth.types';

import styles from './SwitchAuth.module.scss';

interface Props {
	signType: EnumSign;
	setSignType: Dispatch<SetStateAction<EnumSign>>;
}

export function SwitchAuth({ signType, setSignType }: Props) {
	return (
		<div className={styles.wrapper}>
			<button
				type='button'
				className={`${styles.button} ${signType === EnumSign.LOGIN ? styles.active : ''}`}
				onClick={() => setSignType(EnumSign.LOGIN)}
			>
				Login
			</button>
			<button
				type='button'
				className={`${styles.button} ${signType === EnumSign.REGISTER ? styles.active : ''}`}
				onClick={() => setSignType(EnumSign.REGISTER)}
			>
				Register
			</button>
		</div>
	);
}
