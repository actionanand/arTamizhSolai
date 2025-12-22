export const environment = {
  production: true,
  googleFormId: '1FAIpQLSdd5maOire_u5ADq9ljlTQqy4LcYTrrZyoC8qHmGkDUaEXxMg',
  // SHA1 hash of 'password123' - Change this to your desired password hash
  // To generate: echo -n 'your_password' | shasum
  passwordHash: 'PASSWORD_HASH_PLACEHOLDER', // To be replaced during build with actual hash
  // 24 hours in milliseconds
  expiryTime: 24 * 60 * 60 * 1000
};
