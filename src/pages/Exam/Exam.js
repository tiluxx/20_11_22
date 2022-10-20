import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import { Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { StyledEngineProvider } from '@mui/material/styles'

import styles from './Exam.module.scss'
import audio from '~/assets/audios/audio.mp3'
import config from '~/config'
import './GlobalExam.css'

const cx = classNames.bind(styles)

const useAudio = (url) => {
    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(false)

    const toggle = () => setPlaying(!playing)

    useEffect(() => {
        playing ? audio.play() : audio.pause()
    }, [playing])

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false))
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false))
        }
    }, [])

    return [playing, toggle]
}

const questionsBox = [
    { question: 'Question 1: What are they talking about?', A: 'Tomato', B: 'Potato', C: 'Watermelon', D: 'Lime' },
    {
        question: 'Question 2: What is the main topic?',
        A: 'Christmas',
        B: 'Halloween',
        C: 'Thanks Giving',
        D: 'Birthday',
    },
    {
        question: 'Question 3: What is the rank of that school?',
        A: 'Rank 1',
        B: 'Rank 2',
        C: 'Rank 300',
        D: 'Rank 500',
    },
    { question: 'Question 4: Anh ấy sợ cái gì?', A: 'Sợ yêu', B: 'Sợ cô đơn', C: 'Sợ Toán cao cấp', D: 'Sợ human' },
    { question: 'Question 5: What is the song about?', A: 'Thanh xuân', B: 'Thanh hè', C: 'Thanh hạ', D: 'Thanh đông' },
    {
        question: 'Question 6: The question is spoken in the audio?',
        A: 'Answer a',
        B: 'Answer b',
        C: 'Answer c',
        D: 'Answer d',
    },
    {
        question: 'Question 7: What is the main topic?',
        A: 'Nguyên nhân và kết quả',
        B: 'Nội dung và hình thức',
        C: 'Vật chất và ý thức',
        D: 'Duy vật biện chứng',
    },
    {
        question: 'Question 8: What is the meaning of the audio?',
        A: 'Coming soon at 20:00',
        B: 'Coming soon at 21:00',
        C: 'Coming soon at 22:00',
        D: 'Coming soon at 23:00',
    },
    {
        question: 'Question 9: What is the song about?',
        A: 'Hơn cả yêu',
        B: 'Hơn cả ầm ầm',
        C: 'Hơn cả trái tim',
        D: 'Hơn cả nước dầu gội thái dương',
    },
    { question: 'Question 10: What are they talking about?', A: 'Melody', B: 'Excel', C: 'Khùng', D: 'Miss Quy Nhơn' },
]

function Exam() {
    const [playing, toggle] = useAudio(audio)
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = () => {
        if (playing) {
            toggle()
            handleClickOpen()
        } else {
            handleClickOpen()
        }
    }

    const handleContinue = () => {
        if (!playing) {
            toggle()
            handleClose()
        } else {
            handleClose()
        }
    }

    return (
        <div className={cx('container')}>
            <StyledEngineProvider injectFirst>
                <Grid container>
                    <Grid item xs={12}>
                        <div className={cx('heading')}>
                            <h1 className={cx('title')}>Exam</h1>
                            <h3 className={cx('subtitle')}>
                                Bạn phải trả lời hết tất cả các câu hỏi dưới đây. Kết quả sẽ quyết định bạn có được tiếp
                                tục tận hưởng hành trình của mình hay không
                            </h3>
                            <p className={cx('instruction')}>
                                This is the IELTS listening test, you will hear a number of different recordings and you
                                will have to answer questions on what you hear. There will be time for you to read the
                                instructions and questions and you will have a chance to check your work.
                            </p>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={cx('audio-section')}>
                            <h2 className={cx('info')}>
                                Nhấn nút bên dưới để bắt đầu bài nghe.
                                <span>{playing ? ' Audio đang được chạy' : ' Audio đã tạm dừng'}</span>
                            </h2>

                            <button onClick={toggle} className={cx('toggle-btn')}>
                                {playing ? 'Tạm dừng' : 'Bắt đầu'}
                            </button>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={cx('question-section')}>
                            <Grid container spacing={3}>
                                {questionsBox.map((question, index) => (
                                    <Grid key={index} item xs={6}>
                                        <FormControl>
                                            <FormLabel id="demo-row-radio-buttons-group-label">
                                                {question.question}
                                            </FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <FormControlLabel
                                                            value="a"
                                                            control={<Radio />}
                                                            label={question.A}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <FormControlLabel
                                                            value="b"
                                                            control={<Radio />}
                                                            label={question.B}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <FormControlLabel
                                                            value="c"
                                                            control={<Radio />}
                                                            label={question.C}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <FormControlLabel
                                                            value="d"
                                                            control={<Radio />}
                                                            label={question.D}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={cx('submit-section')}>
                            <button className={cx('submit-btn')} onClick={handleSubmit}>
                                Nộp bài
                            </button>

                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{'Ủa? Nhắm làm xong chưa mà nộp.'}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Lưỡi không xương muôn đường lắt léo. Cá nhiều xương làm xong hẵn nộp. Lưu ý: Bạn
                                        hãy tạm dừng audio rồi hẵn xác nhận nộp bài.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <button className={cx('continue-btn')} onClick={handleContinue}>
                                        TIẾP TỤC
                                    </button>
                                    <Link to={config.routes.history}>
                                        <button className={cx('agree-btn')}>XÁC NHẬN</button>
                                    </Link>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </Grid>
                </Grid>
            </StyledEngineProvider>
        </div>
    )
}

export default Exam
