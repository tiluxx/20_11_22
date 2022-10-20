import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import { Grid } from '@mui/material'

import styles from './HistoryLayout.module.scss'
import config from '~/config'

const cx = classNames.bind(styles)

function HistoryLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            {children}
            <footer className={cx('footer')}>
                <Grid container>
                    <Grid item xs={6}>
                        <div className={cx('copyright')}>
                            <Link to={config.routes.home}>
                                <h2 className={cx('branding')}>Fishyland</h2>
                            </Link>
                            <span className={cx('copyright-text')}>© 2022 Fishyland. Made with luv</span>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={cx('contributor-section')}>
                            <h2 className={cx('contributor-title')}>Phía chúng tôi</h2>
                            <h2 className={cx('contributor')}>Hoa hậu biển - TiLux</h2>
                            <h2 className={cx('contributor')}>Chàng trai ngoại giao - Kiệt Trần</h2>
                            <h2 className={cx('contributor')}>Đại sứ du lịch Quy Nhơn - Gin</h2>
                        </div>
                    </Grid>
                </Grid>
            </footer>
        </div>
    )
}

export default HistoryLayout
