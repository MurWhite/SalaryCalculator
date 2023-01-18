export function toRate(value, base = 100, decimals = 1) {
  return isNaN(+value) ? value : (value * base).toFixed(decimals) + "%";
}

export function currencyHandle(value, currency, decimals) {
  if (!isFinite(value) || (!value && value !== 0)) {
    return "-";
  }
  value = parseFloat(value);
  //
  const stringified = String(value);
  const idx = stringified.indexOf(".");
  let _int = "";
  let _float = "";
  let _floatStr = "";
  //
  if (idx !== -1) {
    _int = stringified.substring(0, idx);
    _floatStr = stringified.substring(idx);
  } else {
    _int = stringified;
    _floatStr = ".";
  }
  if (decimals) {
    const _floatLen = decimals + 1;
    // while (_floatStr.length < _floatLen) {
    //   _floatStr += '0'
    // }
    if (_floatStr.length < _floatLen) {
      _floatStr = _floatStr.padEnd(_floatLen, "0");
    }
    _float = _floatStr.substring(0, _floatLen);
  }
  //
  const i = _int.length % 3;
  const head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? "," : "") : "";
  const sign = value < 0 ? "-" : "";
  return (
    (currency ? " " + currency : "") +
    sign +
    head +
    _int.slice(i).replace(/(\d{3})(?=\d)/g, "$1,") +
    _float
  );
}
