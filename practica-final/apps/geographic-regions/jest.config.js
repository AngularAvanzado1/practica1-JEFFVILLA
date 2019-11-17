module.exports = {
  name: 'geographic-regions',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/geographic-regions',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
