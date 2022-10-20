import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import { Grid } from '@mui/material'

import styles from './Home.module.scss'
import config from '~/config'

const cx = classNames.bind(styles)
const kietImg = require('~/assets/images/kiet.png')
const tienImg = require('~/assets/images/tien.png')
const ginImg = require('~/assets/images/gin.png')

function Home() {
    return (
        <div className={cx('container')}>
            <Grid container>
                <Grid item xs={12}>
                    <div className={cx('heading')}>
                        <h1 className={cx('title')}>Chào mừng đến với Bình nguyên vô tận</h1>
                        <p className={cx('subtitle')}>
                            Cảm ơn bạn đã tin tưởng sử dụng các dịch vụ đến từ chúng tôi. Nhằm tri ân khách hàng thân
                            thiết, tổ chức chúng tôi xin phép được gửi đến bạn tất cả tấm lòng này. Một lần nữa, chúc
                            quý khách tận hưởng chuyến đi một cách trọn vẹn.
                        </p>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div className={cx('img-container')}>
                        <Grid container spacing={6}>
                            <Grid item xs={4}>
                                <img src={kietImg} alt="Tran Minh Kiet" className={cx('img-content')} />
                            </Grid>
                            <Grid item xs={4}>
                                <img src={tienImg} alt="Le Thanh Tien" className={cx('img-content')} />
                            </Grid>
                            <Grid item xs={4}>
                                <img src={ginImg} alt="Tong Nguyen Bao Nhu" className={cx('img-content')} />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>

                <Grid item xs={12} textAlign="center">
                    <div className={cx('btn-container')}>
                        <Link to={config.routes.exam}>
                            <button className={cx('begin-btn')}>Bắt đầu</button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
