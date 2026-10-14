export const site = {
  name: 'みそのホームページ',
  description: 'ライブ配信を「純リスナー」として楽しんでます。またリス活の中で、面白そう・役立ちそうと思ったものをAIや様々なツールを活用しながら作っています。',
  socials: [
    { label: 'X', url: 'https://x.com/_miso_eg' },
    { label: 'GitHub', url: 'https://github.com/miso-eg' },
    // YouTubeやその他のSNSはURLが決まったらここに追加します。
  ],
};
export const categories = [
  { slug: 'tools', label: 'TOOLS', name: '自作ツール', icon: '✳', description: 'リス活から生まれた、ちょっと便利なもの。' },
  { slug: 'gallery', label: 'GALLERY', name: '画像・イラスト', icon: '▧', description: 'つくった絵や画像を、ここに少しずつ。' },
  { slug: 'videos', label: 'VIDEOS', name: 'YouTube動画', icon: '▷', description: '動画で楽しむ、制作のあれこれ。' },
  { slug: 'music', label: 'MUSIC', name: '音楽・BGM', icon: '♫', description: '日々に添える音楽とBGM。' },
  { slug: 'other', label: 'OTHER', name: 'その他の制作物', icon: '◇', description: 'カテゴリに収まらない、いろいろなもの。' },
  { slug: 'news', label: 'NEWS', name: 'お知らせ・更新履歴', icon: '↗', description: '新しい作品や、サイトの更新について。' },
] as const;
