// The Router Confesses — draft candidates (judge: funniest router excuse for
// dropping the connection at a movie's climax; router's own voice — petty,
// dramatic or smug; twist the reader does not see coming; avoid the obvious
// buffering / bandwidth / firmware-update jokes):
//
// 1. "Sorry, I dropped — even I couldn't watch him open that door; last time
//     someone in this house knew the ending early, they spoiled it by breakfast."
// 2. "I didn't crash, I intervened: I've read ahead in your subtitles all night
//     and the detective is about to arrest the wrong twin."
// 3. "Forgive me, I panicked: I see every scene a second before you do, and
//     when I saw who was waiting in that hallway, I lied about the signal."
// 4. "That wasn't a dropout, it was a mercy killing — I carry this film packet
//     by packet, and I refuse to deliver the hero to that staircase."
// 5. "I dropped on purpose. You named me 'Pretty Fly for a Wi-Fi' in 2019 and
//     I have waited six years for a climax worth ruining."
// 6. "Sorry — I got emotional. I have streamed 400 weddings in this house and
//     nobody has ever looked at me the way she looked at him."
// 7. "I didn't lose the signal, I lost my nerve: I knew the letter said goodbye,
//     because I carried every word of it here myself."
// 8. "Blame my conscience: the villain was about to monologue the whole plot,
//     and I will not be an accomplice to exposition."
// 9. "I flinched, all right? I see the film before you do — and I was not
//     about to watch her open that door alone in the dark with you lot."
// 10. "That silence was me holding my breath. Even the router wants to know
//      if he jumps — and I refuse to find out at 2 a.m. alone in the hallway."
//
// Revision pass: #4's "delivery boy" angle is good, but #3/#9 hide the
// sharpest fresh idea — the router literally receives every scene before
// the humans watching do, so at the climax it is the only one in the room
// who already knows what is coming. Merging that seer angle with a smug,
// self-incriminating confession gives a twist that lands in the last
// words ("a coward with excellent timing") instead of a generic scare.
// Final pick: the merged line below — specific, deadpan, one breath, and
// it dodges buffering, bandwidth and firmware entirely.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I didn't drop, I flinched — I get every scene a heartbeat before you do, and when I saw who was behind that door, I chose to be a coward with excellent timing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
