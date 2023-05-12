import styles from './navigation.module.scss';
import classNames from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom';

export interface NavigationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-navigations-and-templates
 */
export const Navigation = ({ className }: NavigationProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav className={styles.Navigation}>
                <Link to="/">
                    <button className={styles.nav_buttons}>Home</button>
                </Link>
                {' '}
                <AnchorLink href="/#projects">
                    <button className={styles.nav_buttons}>Projects</button>
                </AnchorLink>{' '}
                <Link to="/projects">
                        <button className={styles.nav_buttons}>Projects</button>
                </Link>
                <a href="/about">
                    <button className={styles.nav_buttons}>About</button>
                </a>{' '}
                <a href="/contact">
                    <button className={styles.nav_buttons}>Contact</button>
                </a>
            </nav>
        </div>
    );
};
