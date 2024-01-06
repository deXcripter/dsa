function saveThePrisoner(n, m, s) {
  const warnPrisoner = ((s + m - 2) % n) + 1;
  return warnPrisoner;
}
