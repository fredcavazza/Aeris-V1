import { execSync } from 'child_process';

try {
  const output = execSync('find /app/applet -name "*AERIS*" 2>/dev/null').toString();
  console.log(output);
} catch (e) {
  console.error(e);
}
