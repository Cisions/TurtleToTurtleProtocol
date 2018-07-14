/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.T2TNodeCapability');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.T2TNodeCapability = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.T2TNodeCapability.repeatedFields_, null);
};
goog.inherits(proto.T2TNodeCapability, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.T2TNodeCapability.displayName = 'proto.T2TNodeCapability';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.T2TNodeCapability.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.T2TNodeCapability.prototype.toObject = function(opt_includeInstance) {
  return proto.T2TNodeCapability.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.T2TNodeCapability} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.T2TNodeCapability.toObject = function(includeInstance, msg) {
  var f, obj = {
    archival: jspb.Message.getFieldWithDefault(msg, 1, false),
    blockchainidList: jspb.Message.getRepeatedField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.T2TNodeCapability}
 */
proto.T2TNodeCapability.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.T2TNodeCapability;
  return proto.T2TNodeCapability.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.T2TNodeCapability} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.T2TNodeCapability}
 */
proto.T2TNodeCapability.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArchival(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setBlockchainidList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.T2TNodeCapability.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.T2TNodeCapability.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.T2TNodeCapability} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.T2TNodeCapability.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArchival();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getBlockchainidList();
  if (f.length > 0) {
    writer.writePackedUint32(
      2,
      f
    );
  }
};


/**
 * optional bool archival = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.T2TNodeCapability.prototype.getArchival = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.T2TNodeCapability.prototype.setArchival = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated uint32 blockChainId = 2;
 * @return {!Array<number>}
 */
proto.T2TNodeCapability.prototype.getBlockchainidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<number>} value */
proto.T2TNodeCapability.prototype.setBlockchainidList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.T2TNodeCapability.prototype.addBlockchainid = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.T2TNodeCapability.prototype.clearBlockchainidList = function() {
  this.setBlockchainidList([]);
};

