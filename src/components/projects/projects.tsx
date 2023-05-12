import styles from './projects.module.scss';
import classNames from 'classnames';

export interface ProjectsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-projectss-and-templates
 */
export const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className="H1">Projects</h1>
            <span className={styles.Gallery}>
                <iframe
                    width="742"
                    height="315"
                    src="https://www.youtube.com/embed/TBMEBSfnJbQ"
                    title="knox om pax"
                    frameBorder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="742"
                    height="557"
                    src="https://www.youtube.com/embed/TybreaCetEA"
                    title="dreary times (remastered)"
                    frameBorder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </span>
        </div>
    );
};
