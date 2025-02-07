const isPrivateIp = (ip: string): boolean => {
  // IPv4のみチェック
  const parts = ip.split('.');
  if (parts.length !== 4) return false;
  
  // 10.0.0.0/8
  if (parts[0] === '10') return true;
  
  // 172.16.0.0/12
  if (parts[0] === '172' && parseInt(parts[1]) >= 16 && parseInt(parts[1]) <= 31) return true;
  
  // 192.168.0.0/16
  if (parts[0] === '192' && parts[1] === '168') return true;
  
  // localhost
  if (ip === '127.0.0.1') return true;
  
  return false;
};

export const validateTurnstile = async (token: string, ip: string) => {
  if (isPrivateIp(ip)) {
    return true;
  }

  const formData = new FormData();
  formData.append('secret', `${process.env.TURNSTILE_SECRET}`);
  formData.append('response', token);
  formData.append('remoteip', ip);

  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
  const result = await fetch(url, {
    body: formData,
    method: 'POST',
  });
  const outcome = await result.json();
  return !!outcome.success;
}
