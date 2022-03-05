// https://jsfiddle.net/mowglisanu/frhwm2xe/3/
// const modifiedFile = await removeExif(file);
// file = modifiedFile ? modifiedFile : file;

export default async function removeExif(file) {
  try {
    const buffer = await file.arrayBuffer();
    const result = await process(buffer);
    return result;
  } catch (err) {
    return;
  }
}

const process = (buffer) => {
  const dv = new DataView(buffer);
  let offset = 0,
    recess = 0;
  const pieces = [];
  let i = 0;
  if (dv.getUint16(offset) == 0xffd8) {
    offset += 2;
    var app1 = dv.getUint16(offset);
    offset += 2;
    while (offset < dv.byteLength) {
      if (app1 == 0xffe1) {
        pieces[i] = { recess: recess, offset: offset - 2 };
        recess = offset + dv.getUint16(offset);
        i++;
      } else if (app1 == 0xffda) {
        break;
      }
      offset += dv.getUint16(offset);
      var app1 = dv.getUint16(offset);
      offset += 2;
    }

    if (pieces.length > 0) {
      const newPieces = [];
      pieces.forEach((v) => {
        newPieces.push(buffer.slice(v.recess, v.offset));
      }, this);
      newPieces.push(buffer.slice(recess));
      const br = new Blob(newPieces, { type: "image/jpeg" });
      return br;
    } else {
      return null;
    }
  }
};
