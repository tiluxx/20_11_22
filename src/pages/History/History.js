import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { Grid } from '@mui/material'

import styles from './History.module.scss'
import backgroundmusic from '~/assets/audios/backgroundmusic.mp3'

const cx = classNames.bind(styles)

const coImg = require('~/assets/images/co.png')
const haImg = require('~/assets/images/ha.png')
const hienImg = require('~/assets/images/hien.png')
const loiImg = require('~/assets/images/loi.png')
const thoImg = require('~/assets/images/tho.png')
const thuImg = require('~/assets/images/thu.png')
const vyImg = require('~/assets/images/vy.png')

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

const ladyInFishyland = [
    {
        name: 'Bà Cố',
        image: coImg,
        description:
            'Nín hạo! Bong…bong…bong. Ô mai gót lun á, 20/10 rồi nè. Chúc cố có một ngày zui zẻ hạnh phúc theo kiểu nào cũng được, năng động xập xình như bar hay là thư thái thanh tịnh như chùa. Hôm nay là ngày của cố nên hãy cứ enjoy bản thân nha vì đối với con có quá đẹp òi, cứ gọi là đẹp mãi hoyy. Cũng đã đi qua gần 5 tuổi xuân xanh, thay vì chúc thì hôm nay tụi con sẽ cảm ơn. Cảm ơn vì đã là người chủ trì, kiềm hãm cái đám cá cứ gọi là quậy này. Cảm ơn vì đã cừ cùng tụi con bấy nhiêu năm qua dù cừ không vì cái gì. Cảm ơn vì những lúc buồn có, vui có, giận hờn có, nhưng cuối cùng lại cũng chỉ cừ :))). Cuối cùng, cảm ơn cố vì đã là một con cá đại vệ trong cái đám cá loi nhoi lóc nhóc này (trừ Kiệt thiên thần).',
    },
    {
        name: 'Con Thư',
        image: thuImg,
        description:
            '“Ko chào!” Đó là người khác nói dãy thôi chứ tụi t cũng dãy :))) Ủa?? Mà 20/10 đồ nè keo, chời ơi chúc bà có một ngày thật keo, cứ gọi là hạnh phúc mãi thôi, răm mận mãi thôi. Chơi với nhau hơi lâu òi nên thôi lần này thay vì chúc thì tụi tui sẽ cảm ơn một lời cảm ơn thật sâu sắc nhóe. Cảm ơn vì đã là một cô gái năng động, tràn trề năng lượng tuổi hoa hồng trẻ trâu. Cảm ơn đã khiến tụi t cừ ẻ mỗi ngày. Cảm ơn vì đã đi qua biết bao nhiêu vui buồn cùng nhau. Cuối cùng là cảm ơn vì đã là một con cá, một phần không thể thiếu của cái đám cá tuy nhỏ mà không nhỏ này.',
    },
    {
        name: 'Con Hiền',
        image: hienImg,
        description:
            'Xin chào master of chinese mãi thôi, cứ gọi là 20/10 đến rồi đi, nên là tụi tui chúc mommy một ngày thật zui zẻ dù là ở bên cạnh ai đi nựa, xinh đẹp như đóa hoa hồng m không thích nhưng vì đẹp nên m công nhận (ý là đẹp không chê nổi đồ đó hiểu hơm). Chơi cũng hơi lâu òi nên không biết nói gì hết ngoài lời cảm ơn. Cảm ơn đã là một người mẹ của một thiên thần đẹp nhất thế gian này. Cảm ơn đã là một cô gái biết tự tin với tất cả những gì mình đang có và trân trọng nó. Cảm ơn vì đã trải qua biết bao nhiêu vui buồn có nhau đêm rét chung chăn ngủ khò khò. Cuối cùng là cảm ơn vì đã là một con cá, một phần không thể thiếu của cái đám cá này.',
    },
    {
        name: 'Con Vy',
        image: vyImg,
        description:
            'Ô hai dô, làm cho cái bánh mousse chanh dây đồ ik. Ủa?? Mà nay 20/10 rồi hẻ? Thôi khỏi làm, để tụi tui chúc bà có một ngày ngọt ngào, hạnh phúc như vị bánh mouse chanh dây ây ây yo yo đồ đó. Dù có ở bên ai ngày hôm nay, hãy luôn nhớ thần chú xinh đẹp vì hôm nay là ngày của you á. Chơi (với) nhau cũng được gần 5 mùa mít rồi nên là hôm nay sẽ là những lời cảm ơn cảm động đậy hen. Cảm ơn vì đã là một cô bé ngày nào còn trăn trở mình là ai, cho đến hôm nay đã biết được điều đó. Cảm ơn vì những lời ra tiếng lại nhưng cuối cùng lại gắn kết tất cả mọi thứ. Cảm ơn vì dù những lần cãi vã, vẫn không ngừng thay đổi và nhận ra giá trị của mình trong khoảng Cá thời gian (khái niệm mới nhan). Cuối cùng, cảm ơn vì đã là một con cá trong cái đám cá này.',
    },
    {
        name: 'Con Lợi',
        image: loiImg,
        description:
            'Dear cô gái roommate có 2 cái tay nhá, cầm cái gì trên tay vậy trời?? Chời đất ơi ăn cắp quá, hoa của tụi t để tặng m 20/10 mà. Chúc my roommate có một ngày 20/10 cứ gọi là dẻ dui, phúc hạnh bên bất kì ai đi nựa (vì tụi tui luôn ở bên mà heheehhe). Cũng được gần 5 năm với gần 1000 cái kì thi IELTS đi qua, cũng hủm biết chúc gì nên là đây sẽ là một lời cảm ơn nha. Cảm ơn vì đã là một cô gái mạnh mẽ hơn bất kì ai trong cái đám này (bông hồng đụng zô chảy máo vì nó có gai đồ á gì á mà t quên òi). Cảm ơn vì đã là con cá cố vấn cho những lúc mà chúng ta trải qua khó khăn. Cảm ơn vì đã cừ nói vui vẻ vì cái đám loi nhoi này (trừ your roommate nha). Cuối cùng là cảm ơn vì đã là một con cá trong cái đám cá tuy nhỏ mà quậy đục nước này.',
    },
    {
        name: 'Con Thơ',
        image: thoImg,
        description:
            'Alo ji nố mô tô, đang làm cái gì dãy hả? Đừng có làm nữa 20/10 tới nơi rồi nè chời ơi. Chúc cope Ther lơ mơ có một ngày 20/10 thật thật zui zẻ hạnh phúc dù là ở bên ai đi nựa nha. Hãy thật xinh đẹp nữa tại MK nó biểu dãy á, ko nghe nó quýnh á. Nói chung là cũng gần 5 mùa thu mơ thu mộng trôi qua, cạn kiệt tài nguyên lời chúc nên thay vào đó hôm nay sẽ là những lời cảm ơn đầy chân ái nha. Cảm ơn vì đã là con cá chung bàn với một thiên thần đẹp. Cảm ơn vì đã là một cô gái với nhiều hoài bão và yêu thương gia đình mình. Cảm ơn vì đã là con cá nói không với những lời thô tục (giờ hết rồi). Cảm ơn vì đã đi qua biết bao nhiêu kỷ niệm đẹp có, không đẹp có để rồi bây giờ là một phần ký ức không thể quên. Cuối cùng cảm ơn vì đã là một mảnh ghép không thể thiếu của cái tổ này.',
    },
    {
        name: 'Con Hà',
        image: haImg,
        description:
            '你好，你很忙吗? Bận gì chời 20/10 rồi kìa lên đồ đi chơi đi chị ơi. Chúc chị 20/10 có một ngày thật zui zẻ, xập xình cứ gọi là linh đình mãi thoyy. Nhớ là phải thật xinh đẹp tại vì sao thì thiên thần Kiệt nói quá nhiều òi tự hiểu ik. Chơi gì mà tới tận gần 五 năm nên giờ không biết chúc gì nè, nên là giờ cứ gọi là cảm ơn nè. Cảm ơn vì đã là con cá rực rỡ sắc màu (cái đầu máu không) nhất trong cái đám cá này. Cảm ơn vì đã là cô gái thành thật với mọi cảm xúc của bản thân. Cảm ơn vì đã cừ đùa theo những cái thứ quỷ quái mà mấy con cá làm. Cảm ơn vì vui buồn có nhau, chia sẻ nhau những lời tâm sự chân thật nhất. Cuối cùng, cảm ơn vì cuối cùng vẫn mãi là con cá trong cái đám cá không được quý tộc hiền lành như cá thiên thần K.',
    },
]
function History() {
    const [playing, toggle] = useAudio(backgroundmusic)

    return (
        <div className={cx('container')}>
            <Grid container>
                <Grid item xs={12}>
                    <div className={cx('heading')}>
                        <h1 className={cx('title')}>Chúc mừng bạn đã hoàn thành bài kiểm tra.</h1>
                        <div className={cx('audio-section')}>
                            <h2 className={cx('info')}>
                                Mời bạn nhấn vào nút dưới đây.
                                <span>{playing ? ' Audio đang được chạy' : ' Audio đã tạm dừng'}</span>
                            </h2>

                            <button onClick={toggle} className={cx('toggle-btn')}>
                                {playing ? 'Tạm dừng' : 'Bắt đầu'}
                            </button>
                        </div>
                        <p className={cx('subtitle')}>
                            Hy vọng bạn đã có những trải nghiệm tuyệt vời nhất trong món quà vừa qua của chúng tôi. Đây
                            là tình cảm chúng tôi dành cho bạn, như bạn được trải nghiệm trong bài kiểm tra, nó tuy rất
                            khó hiểu, quanh co, cũng có chút ngang ngạnh; nhưng trong đấy cũng bao hàm bao ý nghĩa nhân
                            văn, tình cảm to lớn. Tiếp nối, xin kính mời vị khách quý suy ngẫm những dòng thư của chúng
                            tôi đã dùng hết tâm huyết viết thành.
                        </p>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div className={cx('people-img')}>
                        {ladyInFishyland.map((person, index) => (
                            <div className={cx('person-detail')} key={index}>
                                <Grid container alignItems="center">
                                    <Grid item xs={6}>
                                        <img src={person.image} alt={person.name} className={cx('person-img')} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h5 className={cx('person-name')}>{person.name}</h5>
                                        <p className={cx('person-description')}>{person.description}</p>
                                    </Grid>
                                </Grid>
                            </div>
                        ))}
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div className={cx('thanks-letter_wrapper')}>
                        <h3 className={cx('letter-title')}>Sau đây, là lời tri ân của chúng tôi dành cho bạn</h3>
                        <p className={cx('letter-detail')}>
                            Cảm ơn vì đã cùng đồng hành với nhau trong suốt những năm tháng cấp 3, cho đến lúc lên đại
                            học vẫn còn tổ chức những buổi sinh nhật nhỏ cho nhau. Cảm ơn vì đã là những người con gái,
                            mà giờ đây chắc cũng có thể gọi là phụ nữ rồi ha? Có thể những năm tháng đó chỉ là tiếng
                            cười đùa đơn giản mà một hội bạn chơi với nhau đối với người ngoài. Nhưng đối với một gia
                            phả mà đến bây giờ vẫn duy trì cách gọi, đây không chỉ là những khoảnh khắc đơn thuần, mà là
                            những kỷ niệm khó quên. Năm lớp 10, ngại ngùng quen nhau, mấy tuần sau đã cười đùa như những
                            người bạn lâu năm. Năm 11, vui buồn đan xen lẫn nhau, cho đến cuối cùng là những tiếng cười.
                            Năm 12, một năm khó quên với đứa con tinh thần khó quên Fishyland, một năm áp lực chồng áp
                            lực vì kỳ thi, một năm mà mọi cung bậc cảm xúc hiện hữu trong từng khoảnh khắc. Vậy mà, đến
                            cuối cùng, mười con cá, mười tính cách, bằng cách nào đó vẫn luôn bên cạnh nhau. Dù không
                            thể nói trước được tương lai nhưng mong rằng chúng ta sẽ mãi là một phần thanh xuân của
                            nhau. Cuối cùng là video mà các Cá phụ nữ - những nhân vật chính của ngày hôm nay cùng nhau
                            xem nhóe!
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default History
