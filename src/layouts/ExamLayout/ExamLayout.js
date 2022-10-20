import classNames from 'classnames/bind'
import styles from './ExamLayout.module.scss'

const cx = classNames.bind(styles)

function ExamLayout({ children }) {
    return <div className={cx('wrapper')}>{children}</div>
}

export default ExamLayout
