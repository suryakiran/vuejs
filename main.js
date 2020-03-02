var inst = new Vue({
    el:"#app",
    data: {
        title: "Surya",
        asanaCards: [
            {
                'Status':'In UAT',
                'Id':'1162188668420090',
                'Assigned To':'Krishnakumar',
                'Url':'https://app.asana.com/0/1134367795571121/1162188668420090',
                'Name':'EP Pdf Issues (Race)',
                'Due Date':'2020-02-26',
                'Priority':'Blocker',
                'Module':'EigenProfile'
            },
            {
                'Status': 'In Progress',
                'Id': '1163020048923026',
                'Assigned To': 'Rohit',
                'Url': 'https://app.asana.com/0/1134367795571121/1163020048923026',
                'Name': 'Allow prism support to share an analysis at tenant / at global level (UI)',
                'Due Date':'',
                'Priority': 'High',
                'Module':'Exposure Analytics'
            }
        ],
    },
    computed: {
        computedClass: function() {
            if (this.Priority === 'Blocker') {
                return 'bs-callout-danger';
            } else {
                return 'bs-callout-info';
            }
        }
    }
})
