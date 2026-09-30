const CTK_DEFAULT_DATA = {
  settings: {
    siteName: 'CTK Boosting Services',
    tagline: 'Grow your social presence with reliable service, fast delivery & customer support.',
    whatsapp: '+94 75 748 6410',
    whatsappNumber: '94757486410',
    support: '24/7',
    followers: '0',
    following: '0',
    heroBadges: ['🔥 Fast Delivery', '💰 Affordable Prices', '🛡️ Support']
  },
  services: [
    {id:'followers', title:'Followers', icon:'👥', color:'blue', description:'Build your audience and give your profile a stronger social presence.', active:true},
    {id:'subscribers', title:'Subscribers', icon:'▶', color:'purple', description:'Support your YouTube growth with subscriber-focused services.', active:true},
    {id:'views', title:'Views', icon:'◉', color:'pink', description:'Increase content visibility across supported social platforms.', active:true},
    {id:'engagement', title:'Engagement', icon:'♥', color:'orange', description:'Likes and engagement options designed to improve content activity.', active:true}
  ],
  platforms: [
    {id:'tiktok', name:'TikTok', icon:'♪', logoClass:'tiktok-logo', subtitle:'Social Media Boosting', services:['Followers','Views','Likes','Engagement'], active:true},
    {id:'instagram', name:'Instagram', icon:'◎', logoClass:'instagram-logo', subtitle:'Social Media Boosting', services:['Followers','Views','Likes','Engagement'], active:true},
    {id:'youtube', name:'YouTube', icon:'▶', logoClass:'youtube-logo', subtitle:'Channel Growth', services:['Subscribers','Views','Likes','Engagement'], active:true},
    {id:'facebook', name:'Facebook', icon:'f', logoClass:'facebook-logo', subtitle:'Social Media Boosting', services:['Followers','Views','Likes','Engagement'], active:true},
    {id:'telegram', name:'Telegram', icon:'✈', logoClass:'telegram-logo', subtitle:'Channel & Group Growth', services:['Members','Views','Reactions','Engagement'], active:true},
    {id:'whatsapp', name:'WhatsApp', icon:'◉', logoClass:'whatsapp-logo', subtitle:'Channel & Group Growth', services:['Members','Views','Followers','Engagement'], active:true}
  ]
};

function ctkLoadData(){
  try { const saved = localStorage.getItem('ctk_site_data'); if(saved) return {...CTK_DEFAULT_DATA,...JSON.parse(saved)}; } catch(e) {}
  return structuredClone(CTK_DEFAULT_DATA);
}
function ctkSaveData(data){ localStorage.setItem('ctk_site_data', JSON.stringify(data)); }
