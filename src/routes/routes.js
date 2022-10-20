import config from '~/config'

// Layouts
import { HomeLayout, ExamLayout, HistoryLayout } from '~/layouts'

import Home from '~/pages/Home'
import Exam from '~/pages/Exam'
import History from '~/pages/History'
import NotFound from '~/pages/NotFound'

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: HomeLayout },
    { path: config.routes.exam, component: Exam, layout: ExamLayout },
    { path: config.routes.history, component: History, layout: HistoryLayout },
    { path: config.routes.notFound, component: NotFound, layout: null },
]

export { publicRoutes }
