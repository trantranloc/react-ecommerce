/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Đảm bảo Tailwind quét tất cả các file trong dự án của bạn
  ],
  theme: {
    extend: {
      // Màu sắc tùy chỉnh
      colors: {
        primary: '#3490dc', // Màu chính
        secondary: '#ffed4a', // Màu phụ
        accent: '#38b2ac', // Màu nhấn
        dark: '#2d3748', // Màu tối
        light: '#edf2f7', // Màu sáng
      },
      // Phông chữ tùy chỉnh
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      // Khoảng cách (Spacing) tùy chỉnh
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      // Breakpoints cho các điểm dừng (Responsive)
      screens: {
        'xs': '475px', // Responsive nhỏ hơn
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      // Kích thước chữ tùy chỉnh
      fontSize: {
        xxs: '0.625rem', // Font size extra small
        '7xl': '5rem',   // Font size extra large
      },
      // Độ rộng tùy chỉnh
      width: {
        '72': '18rem',
        '84': '21rem',
      },
      // Các biến chuyển động tùy chỉnh (transitions)
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      // Các góc bo tròn tùy chỉnh
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [  ],
  darkMode: 'media', // Hoặc 'class' nếu muốn hỗ trợ chế độ dark mode
}
