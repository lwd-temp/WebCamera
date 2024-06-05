export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh',
  messages: {
    en: {
      welcome:
        'WebRTC-powered Peer-to-Peer webcam surveillance application for real-time monitoring platform.',
      home: 'Home',
      about: 'About',
      login: 'Login',
      label: {
        title: 'Title',
        lang: 'Lang',
        length: 'Length',
        totalViews: 'Total views',
        totalLikes: 'Total likes',
        totalCollections: 'Total collections',
        description: 'Description',
        secondsAgo: '{n} seconds ago',
        minutesAgo: '{n} minutes ago',
        hoursAgo: '{n} hours ago',
        daysAgo: '{n} days ago',
        search: 'Search',
        model: 'Model',
        prompt: 'Prompt',
        genResult: 'Generate result',
        quickStart: 'Quick start',
        selectImage: 'Select image',
        analysisResult: 'Analysis result',
        recResult: 'Recognition result',
        summaryResult: 'Summary results',
        wordCount: 'Word-count',
        audioFile: 'Audio file',
        webRec: 'Web recording',
        connectionID: 'Connection ID',
        audioDev: 'Audio device',
        videoDev: 'Video device'
      },
      btn: {
        myFav: 'My Favorites',
        submit: 'Submit',
        update: 'Update',
        saveDraft: 'Save draft',
        ok: 'OK',
        cancel: 'Cancel',
        send: 'Send',
        clear: 'Clear',
        generate: 'Generate',
        download: 'Download',
        translate: 'Translate',
        copy: 'Copy',
        copied: 'Copied',
        startAnalysis: 'Start analysis',
        startRecognizing: 'Start recognizing',
        startSummarizing: 'Start summarizing',
        startRec: 'Start recording',
        stopRec: 'Stop recording',
        downloadJSONFile: 'Download JSON file',
        camera: 'Camera',
        monitor: 'Monitor',
        connect: 'Connect',
        disconnect: 'Disconnect',
        autoConnect: 'Auto connect',
        openAudio: 'Open audio'
      },
      des: {
        t1: 'Native Support',
        d1: 'Most modern browsers natively support WebRTC',
        t2: 'Efficient Realtime',
        d2: 'WebRTC utilizes peer-to-peer (P2P) communication to avoid server relays, improving communication efficiency',
        t3: 'Privacy & Security',
        d3: 'WebRTC incorporates built-in encryption to secure the communication content'
      },
      hint: {}
    },
    zh: {
      welcome: '基于WebRTC的点对点网络摄像头实时监控工具',
      home: '主页',
      about: '关于',
      login: '登陆',
      label: {
        title: '标题',
        lang: '语言',
        length: '长度',
        totalViews: '总浏览量',
        totalLikes: '总点赞数',
        totalCollections: '总收藏数',
        description: '描述',
        secondsAgo: '{n} 秒前',
        minutesAgo: '{n} 分前',
        hoursAgo: '{n} 小时前',
        daysAgo: '{n} 天前',
        search: '搜索',
        model: '模型',
        prompt: '提示词',
        genResult: '生成结果',
        quickStart: '快速开始',
        selectImage: '选择图片',
        analysisResult: '分析结果',
        recResult: '识别结果',
        summaryResult: '总结结果',
        wordCount: '字数',
        audioFile: '音频文件',
        webRec: '网页录音',
        connectionID: '连接ID',
        audioDev: '音频设备',
        videoDev: '视频设备'
      },
      btn: {
        myFav: '我的收藏',
        submit: '提交',
        update: '更新',
        saveDraft: '保存草稿',
        ok: '确定',
        cancel: '取消',
        send: '发送',
        clear: '清空',
        generate: '生成',
        download: '下载',
        translate: '翻译',
        copy: '复制',
        copied: '已复制',
        startAnalysis: '开始分析',
        startRecognizing: '开始识别',
        startSummarizing: '开始总结',
        startRec: '开始录制',
        stopRec: '停止录制',
        downloadJSONFile: '下载JSON文件',
        camera: '摄像头',
        monitor: '监控',
        connect: '连接',
        disconnect: '断开连接',
        autoConnect: '自动连接',
        openAudio: '开启音频'
      },
      des: {
        t1: '原生支持',
        d1: '大部分现代浏览器原生支持WebRTC',
        t2: '高效实时',
        d2: 'WebRTC通过P2P通信避免服务器中继，提高通信效率',
        t3: '隐私安全',
        d3: 'WebRTC内置了加密技术，保护了通信内容的安全'
      },
      hint: {}
    }
  }
}))
