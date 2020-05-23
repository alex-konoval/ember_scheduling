import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  // prevent dasherize params
  keyForAttribute(key) {
    return key;
  }
}
