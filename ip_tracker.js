let ip_list = {};
let ip_top100 = [];

function request_handled(ip_address) {
  ip_list[ip_address] = ip_address[ip_address] + 1 || 1;
  const temp = [...ip_top100, ip_address].sort((a,b) => ip_list[b] - ip_list[a]);
  ip_top100 = temp.slice(0, 100);
}

function top100() {
  return ip_top100;
}

function clear() {
  ip_list = {};
  ip_top100 = [];
}
