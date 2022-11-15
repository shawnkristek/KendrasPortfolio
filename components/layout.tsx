import {ReactNode} from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from './styles/layout.module.css';

const name = "Kendra Wright";
export const siteTitle = "Kendra Wright UX/UI Designer"

type Props = {
    children?: ReactNode
}

export default function Layout({children, ...props}: Props) {
    return <>{children}</>;
}