import styles from './navigation.module.scss';
import classNames from 'classnames';

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
                <a href="/home">Home</a> | <a href="/projects">Projects</a> |{' '}
                <a href="/about">About</a> | <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};
