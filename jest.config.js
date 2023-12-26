module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
};
