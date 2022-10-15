module.exports = {
    'get /api/v8/servers': {'function': 'ServerController.fetchServers', protected: true},
    'get /api/v8/servers/by-id/:id': {'function': 'ServerController.fetchServer', protected: true},
    'get /api/v8/servers/by-id/:id/config': {'function': 'ServerController.fetchConfig', protected: true},

    'get /api/v8/servers/by-id/:id/members': {'function': 'ServerController.fetchMembers', protected: true},
    'get /api/v8/servers/by-id/:id/members/:memberId': {'function': 'ServerController.fetchMember', protected: true},

    'get /api/v8/servers/by-id/:id/staff': {'function': 'StaffController.fetchStaff', protected: true},
    'get /api/v8/servers/by-id/:id/staff/:moderator/profile': {'function': 'StaffController.fetchProfile', protected: true},
    'get /api/v8/servers/by-id/:id/staff/:moderator/profile/sanctions': {'function': 'StaffController.fetchSanctions', protected: true},
    'get /api/v8/servers/by-id/:id/staff/:moderator/profile/activity': {'function': 'StaffController.fetchActivity', protected: true},
    'get /api/v8/servers/by-id/:id/staff/:moderator/profile/statistics': {'function': 'StaffController.fetchStatistics', protected: true},

    'get /api/v8/members/:memberId/profile': {'function': 'MemberController.fetchProfile', protected: true},
    'get /api/v8/members/:memberId/profile/levels': {'function': 'MemberController.fetchLevel', protected: true},
    'get /api/v8/members/:memberId/profile/servers': {'function': 'MemberController.fetchServers', protected: true},
    'get /api/v8/members/:memberId/profile/badges': {'function': 'MemberController.fetchBadges', protected: true},
    'get /api/v8/members/:memberId/profile/premium': {'function': 'MemberController.fetchPremium', protected: true},
    'get /api/v8/members/:memberId/profile/identity': {'function': 'MemberController.fetchIdentity', protected: true},
    'get /api/v8/members/:memberId/profile/records': {'function': 'MemberController.fetchRecords', protected: true},
    'get /api/v8/members/:memberId/is-blacklisted': {'function': 'MemberController.fetchBlacklist', protected: true},

    'get /api/v8/servers/by-id/:id/activity': {'function': 'ServerController.fetchActivity', protected: true},
    'get /api/v8/servers/by-id/:id/verifications': {'function': 'VerificationController.fetch', protected: true},
    'get /api/v8/servers/by-id/:id/verifications/by-id/:verifyId': {'function': 'VerificationController.fetchByID', protected: true},

    'get /api/v8/developers': {'function': 'DevelopersController.fetchDevelopers', protected: true},
    'get /api/v8/developers/by-id/:id': {'function': 'DevelopersController.fetchDeveloper', protected: true},
}