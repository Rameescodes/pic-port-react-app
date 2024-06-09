const express = require('express')
const router = express.Router()
const { getConnections, followUser, rejectRequest, getRequestedUsers, acceptRequest, unFollowUser} = require('../controllers/connectionController')

router.post('/follow', followUser)
router.post('/unfollow', unFollowUser)
router.post('/accept-request', acceptRequest)
router.post('/reject-request', rejectRequest)
router.post('/get-requested-users', getRequestedUsers)
router.post('/get-connection', getConnections)


module.exports = router