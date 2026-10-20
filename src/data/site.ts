export const site = {
  name: 'みそのホームページ',
  description: 'ライブ配信を「純リスナー」として楽しんでます。またリス活の中で、面白そう・役立ちそうと思ったものをAIや様々なツールを活用しながら作っています。',
  socials: [
    { label: 'X', url: 'https://x.com/_miso_eg' },
    { label: 'GitHub', url: 'https://github.com/miso-eg' },
    { label: 'Instagram', url: 'https://www.instagram.com/miso.eg' },
    { label: 'Palmu', url: 'https://app.palmu.jp/users/babb4d3512d14a69b481' },
    { label: 'Steam', url: 'https://steamcommunity.com/id/alpc2632/' },
    { label: 'ComfyClub', url: 'https://comfyapp.top/p/sr7BBP' },
    // その他のSNSはURLが決まったらここに追加します。
  ],
};
export const categories = [
  { slug: 'tools', label: 'TOOLS', name: '自作ツール', icon: '✳', description: 'リス活から生まれた、ちょっと便利なもの。' },
  { slug: 'gallery', label: 'GALLERY', name: '画像・イラスト', icon: '▧', description: 'つくった絵や画像を、ここに少しずつ。' },
  { slug: 'line', label: 'LINE', name: 'LINEスタンプ・絵文字', icon: '☺', description: 'トークに添える、つくったスタンプと絵文字。' },
  { slug: 'music', label: 'MUSIC', name: '音楽・BGM', icon: '♫', description: '日々に添える音楽とBGM。' },
  { slug: 'other', label: 'OTHER', name: 'その他の制作物', icon: '◇', description: 'カテゴリに収まらない、いろいろなもの。' },
] as const;
