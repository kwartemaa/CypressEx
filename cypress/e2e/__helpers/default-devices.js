export const mobile = {
    name: 'iPhone',
    viewport: [320, 568],
    headers: {
      'user-agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    },
    isMobile: true,
  }
  
  
  export const desktop = {
    name: 'Laptop',
    viewport: [1366, 768],
    headers: {
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36',
    },
    isMobile: false,
  }
  
  export const defaultDevices = [desktop, mobile]