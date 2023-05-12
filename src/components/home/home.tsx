import styles from './home.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface HomeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-homes-and-templates
 */
export const Home = ({ className }: HomeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <header className={classNames(styles['App-header'], 'H1')}>
                <h1 className={styles.H1}>Aseem Ratha</h1>
                <p>
                    kdmamdoms dmoasmd sdmasodm sadomasodm asdmasodm asdomasodm sadomasodm asdomsadm
                    sodmamd.{' '}
                </p>
                <button className={styles.nav_buttons}>Explore Projects</button>
            </header>
        </div>
    );
};
