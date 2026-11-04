/**
 * IdleFantasy - Ironman Companion & Interactive Roadmap
 * Modular application logic with hardened security (DOM-based XSS defense,
 * prototype pollution protection, sanitized storage, and dynamic cloud sync).
 */

    const ROADMAP_DATA = [
      {
        id: "phase1",
        title_en: "PHASE 1: DAY 1 – BOOTSTRAP",
        title_vi: "GIAI ĐOẠN 1: NGÀY 1 – BOOTSTRAP (KHỞI ĐẦU)",
        subtitle_en: "A weapon in hand, Smithing started and first quests ticking by tomorrow morning.",
        subtitle_vi: "Vũ khí đầu tiên trong tay, bắt đầu luyện Smithing và nhận quest vào sáng hôm sau.",
        tasks: [
          {
            id: "p1_1",
            time: "17:00",
            category: "setup",
            title_en: "Create your Ironman character and pick your race carefully",
            title_vi: "Tạo nhân vật Ironman và chọn tộc cẩn thận",
            desc_en: "You start with bronze boots and bronze gathering tools: no weapon, no coins, 10 HP. Race is locked for Ironmen and decides which prestige upgrades you can buy: Orc for combat (food heals more, you keep more on death), Gnome for the only extra queue slot.",
            desc_vi: "Khởi đầu với bronze boots và bronze gathering tools: không vũ khí, 0 coin, 10 HP. Tộc bị khóa vĩnh viễn: Chọn Orc (hồi máu thức ăn nhiều hơn, giữ nhiều đồ hơn khi chết) hoặc Gnome (lấy thêm 1 ô queue độc quyền).",
            tags_en: ["17:00", "Setup", "Ironman"],
            tags_vi: ["17:00", "Khởi đầu", "Ironman"]
          },
          {
            id: "p1_2",
            time: "17:00",
            category: "gathering",
            title_en: "Queue two Mining sessions: copper, then tin",
            title_vi: "Xếp 2 lượt Mining: Copper (Đồng) rồi tới Tin (Thiếc)",
            desc_en: "Bronze bars need 1 of each; you'll mine 60 per session.",
            desc_vi: "Thỏi đồng (Bronze bar) cần 1 quặng đồng + 1 quặng thiếc. Bạn sẽ đào 60 quặng mỗi lượt.",
            tags_en: ["17:00", "Mining"],
            tags_vi: ["17:00", "Khai mỏ"]
          },
          {
            id: "p1_3",
            time: "17:00",
            category: "agility",
            title_en: "Fill the last two queue slots with the Beginner Course (Agility)",
            title_vi: "Lấp đầy 2 ô queue còn lại bằng Beginner Course (Agility)",
            desc_en: "Agility shortens every future mainland session (60 → 40 min at 99). Training it never stops.",
            desc_vi: "Agility rút ngắn thời gian mọi session tương lai (từ 60 phút xuống 40 phút ở cấp 99). Đừng bao giờ ngừng cày Agility.",
            tags_en: ["17:00", "Agility"],
            tags_vi: ["17:00", "Nhanh nhẹn"]
          },
          {
            id: "p1_4",
            time: "17:00",
            category: "quest",
            title_en: "Open the Quests screen and skim the early quests",
            title_vi: "Mở màn hình Quests và xem lướt các quest đầu game",
            desc_en: "The lifelong habit: before choosing what to gather or kill, check if a quest wants that exact thing.",
            desc_vi: "Thói quen vàng: Trước khi quyết định thu hoạch hay săn quái gì, luôn kiểm tra xem có nhiệm vụ nào yêu cầu đúng thứ đó hay không.",
            tags_en: ["17:00", "Quests"],
            tags_vi: ["17:00", "Nhiệm vụ"]
          },
          {
            id: "p1_5",
            time: "21:00",
            category: "crafting",
            title_en: "Queue the night: smith ALL ore into bronze bars",
            title_vi: "Queue đêm: Smithing toàn bộ quặng thành Bronze bars",
            desc_en: "The bar batch levels Smithing while you sleep.",
            desc_vi: "Mẻ đúc phôi đồng sẽ tăng cấp Smithing trong khi bạn ngủ.",
            tags_en: ["21:00", "Smithing"],
            tags_vi: ["21:00", "Rèn đúc"]
          },
          {
            id: "p1_6",
            time: "21:00",
            category: "combat",
            title_en: "Queue Farm dungeon ×6 (Safest dungeon in game)",
            title_vi: "Queue Farm dungeon ×6 (Dungeon an toàn nhất game)",
            desc_en: "The Farm is the one dungeon where you can't die (safe with no weapon) and every kill drops raw meat and bones: your food farm and prayer bank for weeks.",
            desc_vi: "Dungeon duy nhất không thể chết (an toàn kể cả không mang vũ khí). Mỗi con quái rơi thịt sống và xương: nguồn thức ăn và ngân hàng Prayer cho nhiều tuần tới.",
            tags_en: ["21:00", "Combat", "Food"],
            tags_vi: ["21:00", "Chiến đấu", "Lương thực"]
          },
          {
            id: "p1_7",
            time: "21:00",
            category: "prayer",
            title_en: "Queue two agility courses & bury bones at Bone Altar",
            title_vi: "Chôn xương tại Bone Altar để tích lũy nhiệm vụ Prayer",
            desc_en: "Bury bones at the Bone Altar for the Prayer quests, and keep agility running.",
            desc_vi: "Chôn xương tại Bone Altar để hoàn thành sớm chuỗi quest Prayer.",
            tags_en: ["21:00", "Prayer", "Agility"],
            tags_vi: ["21:00", "Cầu nguyện", "Agility"]
          }
        ]
      },
      {
        id: "phase2",
        title_en: "PHASE 2: DAY 2 – ARMED",
        title_vi: "GIAI ĐOẠN 2: NGÀY 2 – ARMED (TRANG BỊ VŨ KHÍ)",
        subtitle_en: "Bronze weapon equipped, goblins farming overnight, first coins.",
        subtitle_vi: "Trang bị vũ khí Bronze, cày Goblin qua đêm, kiếm những đồng tiền vàng đầu tiên.",
        tasks: [
          {
            id: "p2_1",
            time: "07:00",
            category: "crafting",
            title_en: "Craft and equip a bronze dagger, then armor as Smithing allows",
            title_vi: "Rèn & trang bị Bronze dagger, sau đó rèn giáp theo cấp Smithing",
            desc_en: "Last night's bars got you a few levels: dagger now, helmet at 3; sword (4) and shield (8) follow as you keep smithing. Bronze tools are worthless (1x), don't make them.",
            desc_vi: "Cấp 1 rèn Dagger ngay; Nón sắt ở Lv 3; Kiếm (Sword) ở Lv 4; Khiên (Shield) ở Lv 8. Cực kỳ lưu ý: Bronze tools hoàn toàn vô dụng (1×), tuyệt đối không rèn phí tài nguyên.",
            tags_en: ["07:00", "Smithing", "Gear"],
            tags_vi: ["07:00", "Smithing", "Trang bị"]
          },
          {
            id: "p2_2",
            time: "12:00",
            category: "crafting",
            title_en: "Queue a batch of cooked Farm meat (Only cooked food heals in combat)",
            title_vi: "Nấu chín thịt từ Farm dungeon (Chỉ thức ăn chín mới hồi máu)",
            desc_en: "Only cooked food heals in combat (bread and raw meat don't).",
            desc_vi: "Bánh mì và thịt sống không hồi máu trong combat! Chuẩn bị lương thực trước khi bước vào các bãi quái thật sự.",
            tags_en: ["12:00", "Cooking", "Food"],
            tags_vi: ["12:00", "Nấu ăn", "Thức ăn"]
          },
          {
            id: "p2_3",
            time: "12:00",
            category: "combat",
            title_en: "Queue copper/tin mining + agility, ending with Goblin Cave ×2",
            title_vi: "Xếp đào Copper/Tin + Agility, chốt đuôi bằng Goblin Cave ×2",
            desc_en: "The ×2 tail keeps the queue busy while you work, and goblin kills feed two kill-quests. Check the survival badge first: a run that ends in death gives no quest credit and keeps only 10% of its XP and loot.",
            desc_vi: "Chốt đuôi Goblin Cave ×2 giữ queue luôn chạy và phục vụ 2 quest diệt quái. Kiểm tra huy hiệu sống sót (Survival badge) trước tiên: Run nào bị chết sẽ KHÔNG tính tiến độ quest và chỉ giữ lại 10% XP cùng đồ nhặt được.",
            tags_en: ["12:00", "Combat", "Mining"],
            tags_vi: ["12:00", "Combat", "Đào khoáng"]
          },
          {
            id: "p2_4",
            time: "17:00",
            category: "thieving",
            title_en: "Pickpocket peasants all evening (Thieving)",
            title_vi: "Móc túi dân thường (Pickpocket peasants) suốt buổi tối",
            desc_en: "5–15 coins per pick plus bread and seeds. 100 successful picks (6–7 sessions at level 1) completes Thieving I: 1,500 coins + 2,000 XP.",
            desc_vi: "5–15 coin mỗi lần cộng bánh mì và hạt giống. Đạt 100 lần thành công (khoảng 6–7 session ở Lv 1) hoàn thành Thieving I: Nhận 1.500 coin + 2.000 XP.",
            tags_en: ["17:00", "Thieving", "Money"],
            tags_vi: ["17:00", "Móc túi", "Tiền vàng"]
          },
          {
            id: "p2_5",
            time: "21:00",
            category: "combat",
            title_en: "Queue the night: Goblin Cave ×6 + 1–2 Crumbling Watchtower expeditions",
            title_vi: "Queue đêm: Goblin Cave ×6 + 1–2 Crumbling Watchtower expeditions",
            desc_en: "The Watchtower is the agility expedition and its 5 lore notes unlock the hidden Shadow Den, home of the 2.5× grappling hook.",
            desc_vi: "Watchtower là thám hiểm Agility, thu thập 5 lore notes tại đây để mở khóa Shadow Den bí mật (nơi có móc leo 2.5×).",
            tags_en: ["21:00", "Combat", "Expeditions"],
            tags_vi: ["21:00", "Combat", "Thám hiểm"]
          }
        ]
      },
      {
        id: "phase3",
        title_en: "PHASE 3: WEEKS 1–2 – THE ENGINE",
        title_vi: "GIAI ĐOẠN 3: TUẦN 1–2 – THE ENGINE (BỘ MÁY VẬN HÀNH)",
        subtitle_en: "Ore flowing through daytime slots, dailies claimed every morning, combat ~15, Agility 50, food stockpile growing.",
        subtitle_vi: "Khai thác quặng ổn định, nhận Dailies mỗi sáng, Combat ~15, Agility 50, kho thịt đầy ắp.",
        tasks: [
          {
            id: "p3_1",
            time: "07:00",
            category: "routine",
            title_en: "Every morning, forever: claim finished dailies, check the weekly",
            title_vi: "Thói quen vĩnh viễn mỗi sáng: Claim Dailies và kiểm tra Weekly",
            desc_en: "Three dailies a day pay 2,000c each, or a dwarven piece instead (1%, rising every dry claim, guaranteed by the 51st). Finish all 5 weeklies for the bonus roll at divine gear. Main income.",
            desc_vi: "3 nhiệm vụ Daily mỗi ngày thưởng 2.000 coin/quest (hoặc 1% cơ hội rơi mảnh đồ Dwarven, có pity bảo hiểm rơi ở mốc 51). Hoàn thành cả 5 Weekly để roll đồ Divine.",
            tags_en: ["07:00", "Dailies", "Income"],
            tags_vi: ["07:00", "Hàng ngày", "Thu nhập"]
          },
          {
            id: "p3_2",
            time: "12:00",
            category: "gathering",
            title_en: "Make copper + tin default daytime sessions, working toward the 500-bar quest",
            title_vi: "Duy trì Copper + Tin làm mặc định, hướng tới nhiệm vụ 500 bar",
            desc_en: "Ore is the input for everything in the next month. Smithing I (500 bronze bars) pays 1,000 coins, 2,000 Smithing XP and 100 iron bars.",
            desc_vi: "Hoàn thành quest Smithing I (500 bronze bars) nhận 1.000 coin, 2.000 Smithing XP và 100 Iron bars quý giá.",
            tags_en: ["12:00", "Mining", "Quests"],
            tags_vi: ["12:00", "Đào khoáng", "Quest"]
          },
          {
            id: "p3_3",
            time: "07:00",
            category: "quest",
            title_en: "Claim Mining I (500 copper mined) the morning it completes",
            title_vi: "Claim quest Mining I (500 copper) ngay khi hoàn thành",
            desc_en: "Pays 1,000 coins, 2,000 Mining XP + 100 iron ore. Gives you iron before you can mine it yourself at Mining 15.",
            desc_vi: "Nhận 1.000 coin, 2.000 Mining XP + 100 Iron ore sớm. Giúp bạn có quặng sắt từ trước khi đủ cấp Mining 15.",
            tags_en: ["07:00", "Mining", "Quests"],
            tags_vi: ["07:00", "Đào quặng", "Quest"]
          },
          {
            id: "p3_4",
            time: "07:00",
            category: "agility",
            title_en: "At Smithing 15, craft and equip the iron grappling hook (2 iron bars)",
            title_vi: "Tại Smithing 15: Rèn & trang bị Iron Grappling Hook (2 iron bars)",
            desc_en: "The 500 bars get you past Smithing 15. Hooks work in whole laps: no hook = 2 laps/min, iron = 3 (+50% agility XP). Worn at Agility 15.",
            desc_vi: "Tăng từ 2 vòng lên 3 vòng/phút (+50% Agility XP). Trang bị khi đạt Agility 15.",
            tags_en: ["07:00", "Agility", "Smithing"],
            tags_vi: ["07:00", "Agility", "Smithing"]
          },
          {
            id: "p3_5",
            time: "17:00",
            category: "agility",
            title_en: "Run courses each evening until Agility 50",
            title_vi: "Chạy Agility courses mỗi tối cho tới khi chạm mốc Agility 50",
            desc_en: "Only ~6 sessions from scratch. Always run highest course unlocked (new one every 5 levels). Courses pay 3–11× Watchtower XP.",
            desc_vi: "Chỉ tốn ~6 session từ đầu. Luôn chạy course cao nhất vừa mở (mở khóa mới mỗi 5 level). Course cho lượng XP gấp 3–11 lần Watchtower.",
            tags_en: ["17:00", "Agility"],
            tags_vi: ["17:00", "Agility"]
          },
          {
            id: "p3_6",
            time: "21:00",
            category: "combat",
            title_en: "Around combat 10: Spider Den → Bandit Camp, Farm night when food low",
            title_vi: "Khi Combat ~10: Chuyển đêm sang Spider Den → Bandit Camp",
            desc_en: "Bandits drop steel swords (10%/kill, Attack 20 to wield) and wooden bows; Rogues drop iron daggers. Goblin Slayer II (100 kills) gives free steel sword. Cook Farm meat in overnight batches.",
            desc_vi: "Bandit rơi Steel sword (tỉ lệ 10%, cần Attack 20) và cung gỗ; Rogue rơi Iron dagger. Diệt 100 con Goblin hoàn thành Goblin Slayer II: Tặng free 1 thanh Steel sword.",
            tags_en: ["21:00", "Combat", "Gear"],
            tags_vi: ["21:00", "Combat", "Trang bị"]
          }
        ]
      },
      {
        id: "phase4",
        title_en: "PHASE 4: WEEKS 2–4 – THE SHADOW HOOK",
        title_vi: "GIAI ĐOẠN 4: TUẦN 2–4 – THE SHADOW HOOK",
        subtitle_en: "Shadow Grappling Hook equipped by Agility 40–55: 5 laps/min vs iron's 3, two-thirds more course XP for climb to 99.",
        subtitle_vi: "Trang bị Shadow Grappling Hook (Agility 40–55), full bộ công cụ Steel 1.5×.",
        tasks: [
          {
            id: "p4_1",
            time: "12:00",
            category: "agility",
            title_en: "Keep 1–2 Watchtower expeditions in daytime queue until all 5 lore notes drop",
            title_vi: "Chạy 1–2 Watchtower vào ban ngày cho tới khi gom đủ 5 Lore Notes",
            desc_en: "~16% per session plus free note after 9 dry sessions: about 24 expeditions for all 5.",
            desc_vi: "~16% mỗi session kèm bảo hiểm rơi sau 9 lần trắng tay: Mất khoảng 24 expedition để nhặt đủ 5 notes mở Shadow Den.",
            tags_en: ["12:00", "Expeditions", "Agility"],
            tags_vi: ["12:00", "Thám hiểm", "Agility"]
          },
          {
            id: "p4_2",
            time: "21:00",
            category: "combat",
            title_en: "Once Shadow Den unlocks, run it ×24 nightly until the hook drops",
            title_vi: "Chạy Shadow Den ×24 hàng đêm cho tới khi rớt Shadow Grappling Hook",
            desc_en: "2% per survived run. A night fits ~10–12 runs (~20%). Expect 4–5 nights.",
            desc_vi: "Tỉ lệ 2% mỗi run sống sót. Một đêm nhồi được ~10–12 run (~20%). Mất khoảng 4–5 đêm.",
            tags_en: ["21:00", "Combat", "Hook"],
            tags_vi: ["21:00", "Combat", "Móc leo"]
          },
          {
            id: "p4_3",
            time: "17:00",
            category: "agility",
            title_en: "Equip Shadow Hook day it drops (needs Agility 40), then courses to 55",
            title_vi: "Trang bị Shadow Hook ngay khi có (cần Agility 40), cày courses lên 55",
            desc_en: "40→55 takes ~2 sessions with it. Hook runs 5 laps a minute. Retire Watchtower for good.",
            desc_vi: "Shadow Hook đạt tốc độ 5 vòng/phút (so với 3 vòng của iron hook). Đẩy từ 40 lên 55 chỉ mất ~2 session.",
            tags_en: ["17:00", "Agility"],
            tags_vi: ["17:00", "Agility"]
          },
          {
            id: "p4_4",
            time: "21:00",
            category: "mining",
            title_en: "Push Mining to 30 (iron sessions) → Smithing 30 → craft steel tool set",
            title_vi: "Đẩy Mining lên 30 (Sắt) → Smithing 30 rèn bộ công cụ Steel Tools",
            desc_en: "Coal needs Mining 30; steel bars (1 iron + 2 coal) need Smithing 30. Smithing II pays 100 steel bars. Steel tools 1.5× items and XP. Skip steel hook.",
            desc_vi: "Than cần Mining 30; Phôi Steel (1 iron + 2 coal) cần Smithing 30. Smithing II thưởng 100 steel bars. Công cụ Steel nhân 1.5× sản lượng và XP. Bỏ qua Steel hook.",
            tags_en: ["21:00", "Smithing", "Tools"],
            tags_vi: ["21:00", "Smithing", "Công cụ"]
          },
          {
            id: "p4_5",
            time: "17:00",
            category: "combat",
            title_en: "Do one Goblin Cave run in each style: melee, ranged, magic",
            title_vi: "Chạy Goblin Cave với đủ 3 phong cách: Melee, Ranged, Magic",
            desc_en: "Three quests pay 3,000c + 5,000 XP. Ranged: Shortbow (Fletching 5) + bronze arrows. Magic: Staff of Air (Fletching 1: 1 log + 1,000 air runes) for unlimited air runes.",
            desc_vi: "3 quest thưởng 3.000 coin + 5.000 XP chia đều combat skills. Ranged: Dùng Shortbow (Fletching 5) + tên đồng. Magic: Staff of Air (Fletching 1: 1 log + 1.000 air runes) để dùng gió vô hạn.",
            tags_en: ["17:00", "Combat", "Quests"],
            tags_vi: ["17:00", "Combat", "Quest"]
          },
          {
            id: "p4_6",
            time: "12:00",
            category: "gathering",
            title_en: "Add the other four starter expeditions to daytime rotation",
            title_vi: "Thêm 4 Starter Expeditions vào ca ngày",
            desc_en: "Copper Caverns (Mining), Whispering Grove (Woodcutting), Sunken Grotto (Fishing), Thieves' Den (Thieving). Each unlocks a dungeon with a 2.5× tool.",
            desc_vi: "Copper Caverns (Mining), Whispering Grove (Woodcutting), Sunken Grotto (Fishing), Thieves' Den (Thieving). Mỗi nơi mở dungeon ẩn chứa công cụ 2.5×.",
            tags_en: ["12:00", "Expeditions", "Tools"],
            tags_vi: ["12:00", "Thám hiểm", "Công cụ"]
          },
          {
            id: "p4_7",
            time: "21:00",
            category: "combat",
            title_en: "At combat ~18–20: switch nights to Fortress Ruins for Mithril sword",
            title_vi: "Combat ~18–20: Chuyển đêm sang Fortress Ruins săn Mithril Sword",
            desc_en: "Only Knights drop it (12%). Needs Attack 30 to wield and Smithing 54 to make.",
            desc_vi: "Chỉ Knights mới rớt kiếm (12%). Cần Attack 30 để cầm và bình thường phải Smithing 54 mới rèn được.",
            tags_en: ["21:00", "Combat", "Gear"],
            tags_vi: ["21:00", "Combat", "Trang bị"]
          }
        ]
      },
      {
        id: "phase5",
        title_en: "PHASE 5: MONTHS 2–3 – THE TOWN PROJECT",
        title_vi: "GIAI ĐOẠN 5: THÁNG 2–3 – THE TOWN PROJECT",
        subtitle_en: "One goal: the 5th queue slot (+25% daytime coverage). Construction 40 paid for by quests.",
        subtitle_vi: "Mở ô Queue thứ 5 (+25% năng suất ban ngày), Construction 40 qua các quest.",
        tasks: [
          {
            id: "p5_1",
            time: "21:00",
            category: "combat",
            title_en: "Rotate nights between Collapsed Mine, Ancient Forest Ruins, Drowned Temple for 2.5× tools",
            title_vi: "Luân phiên các đêm chạy 3 dungeon ẩn săn công cụ 2.5×",
            desc_en: "Deep Iron Pickaxe, Ironwood Axe, Blessed Fishing Rod: 2% per survived run, worn at skill 40 (2.5×). Farm Farm dungeon when food low.",
            desc_vi: "Collapsed Mine (Deep Iron Pickaxe), Ancient Forest Ruins (Ironwood Axe), Drowned Temple (Blessed Fishing Rod): Tỉ lệ rớt 2%, yêu cầu skill 40 để trang bị.",
            tags_en: ["21:00", "Combat", "Tools"],
            tags_vi: ["21:00", "Combat", "Công cụ"]
          },
          {
            id: "p5_2",
            time: "12:00",
            category: "gathering",
            title_en: "Farm building supplies in daytime slots",
            title_vi: "Gom nguyên liệu thô xây dựng",
            desc_en: "~200 logs, 1,200 oak, 100 willow, 400 stone, and 1,650 iron + 1,300 steel nails (≈110 iron + 65 steel bars: ~175 iron ore + 130 coal).",
            desc_vi: "~200 logs thường, 1.200 oak logs, 100 willow logs, 400 stone, và 1.650 iron nails + 1.300 steel nails (tốn ~175 iron ore + 130 coal).",
            tags_en: ["12:00", "Gathering", "Town"],
            tags_vi: ["12:00", "Khai thác", "Thị trấn"]
          },
          {
            id: "p5_3",
            time: "21:00",
            category: "construction",
            title_en: "On stockpile nights: fletch planks, smith nails, build 4 construction quests",
            title_vi: "Thực hiện chuỗi 4 công trình mở thẳng Construction 40 (~38.5k XP)",
            desc_en: "50 wooden racks (3k XP) → 50 oak tables (12k) → Guild Hall (8k) and Church (10k). Hits level 40 without a single junk build.",
            desc_vi: "Xây 50 wooden racks (3k XP) → 50 oak tables (12k XP) → Guild Hall (8k XP) → Church (10k XP). Đạt level 40 sạch sẽ không cần xây 1 món đồ rác.",
            tags_en: ["21:00", "Construction"],
            tags_vi: ["21:00", "Xây dựng"]
          },
          {
            id: "p5_4",
            time: "any",
            category: "town",
            title_en: "Build Queue Master T1 (200k coins, 300 oak + 100 willow planks, 800 steel nails)",
            title_vi: "Xây Queue Master T1 (200k coin, 300 oak planks, 100 willow planks, 800 steel nails)",
            desc_en: "5th slot (4 queued + 1 running) is +25% daytime coverage forever.",
            desc_vi: "Mở khóa ô queue thứ 5 (4 ô chờ + 1 ô đang chạy) tăng vĩnh viễn +25% năng suất hoạt động ban ngày.",
            tags_en: ["Any", "Town", "Queue"],
            tags_vi: ["Any", "Thị trấn", "Hàng đợi"]
          },
          {
            id: "p5_5",
            time: "any",
            category: "town",
            title_en: "Build Garden (80k coins) and skip the Inn",
            title_vi: "Xây Garden (80k coin) và bỏ qua Inn (Quán trọ)",
            desc_en: "Garden adds farm patch. Skip Inn: it only helps workers, which Ironmen can't hire.",
            desc_vi: "Garden mở thêm đất trồng. Bỏ qua Inn vì chỉ có tác dụng thuê thợ làm thuê mà Ironman không thể dùng.",
            tags_en: ["Any", "Town"],
            tags_vi: ["Any", "Thị trấn"]
          },
          {
            id: "p5_6",
            time: "17:00",
            category: "agility",
            title_en: "Evening courses to Agility 70; thieve merchants when you need coin top-up",
            title_vi: "Chạy Agility buổi tối lên 70; móc túi thương nhân (Merchants) khi kẹt tiền",
            desc_en: "Only ~6 sessions from 55 with Shadow Hook. Dailies, weeklies and quests cover budget.",
            desc_vi: "Chỉ tốn ~6 session từ mốc 55 với Shadow Hook. Dailies và weeklies sẽ tài trợ ngân sách xây dựng.",
            tags_en: ["17:00", "Agility", "Money"],
            tags_vi: ["17:00", "Agility", "Tiền"]
          },
          {
            id: "p5_7",
            time: "21:00",
            category: "combat",
            title_en: "Combat ladder: Fortress Ruins → Orc Stronghold → Volcanic Depths. Eat threshold 60–70%",
            title_vi: "Leo thang Combat: Fortress Ruins → Orc Stronghold → Volcanic Depths",
            desc_en: "Keep Slayer task active: points buy Slayer armour (80 Def body at Defence 45) and Abyssal Whip. Combat XP auto-splits 70/15/15. Defence blessings only.",
            desc_vi: "Đặt ngưỡng ăn máu (Eat threshold) ở 60–70%. Duy trì Slayer task: Điểm slayer đổi lấy Slayer armour (thân áo 80 Def ở cấp 45 Defence) và Abyssal Whip.",
            tags_en: ["21:00", "Combat", "Slayer"],
            tags_vi: ["21:00", "Combat", "Slayer"]
          }
        ]
      },
      {
        id: "phase6",
        title_en: "PHASE 6: MONTHS 3–6 – AGILITY 99 & THE TOWER",
        title_vi: "GIAI ĐOẠN 6: THÁNG 3–6 – AGILITY 99 & THE TOWER",
        subtitle_en: "Sessions hit 40 minutes, then prestige pushes them toward 30. The tower banks max HP and armour.",
        subtitle_vi: "Lượt session giảm xuống 40 phút, Prestige lần 1, leo Infinite Tower tích lũy Max HP.",
        tasks: [
          {
            id: "p6_1",
            time: "17:00",
            category: "agility",
            title_en: "Evening courses to Agility 99, then prestige it",
            title_vi: "Chạy courses buổi tối lên Agility 99 rồi kích hoạt Prestige",
            desc_en: "~53 sessions (~37 h) from 70 with Shadow Hook. Ironmen CAN prestige: Agility's 3 prestiges buy Endurance (floor 40 → 30 min) and 48 h of 2× XP each.",
            desc_vi: "~53 session (~37 giờ) từ mốc 70 với Shadow Hook. Ironman CÓ THỂ prestige: 3 lần prestige mở Endurance (rút sàn từ 40 xuống 30 phút) và 48h nhân đôi XP mỗi lần.",
            tags_en: ["17:00", "Agility", "Prestige"],
            tags_vi: ["17:00", "Agility", "Prestige"]
          },
          {
            id: "p6_2",
            time: "21:00",
            category: "combat",
            title_en: "Climb the Infinite Tower on nights you have food: claim +50 max HP at floors 60/160/210",
            title_vi: "Leo Infinite Tower vào những đêm dồi dào thức ăn",
            desc_en: "Claim milestones by hand at floors 60/160/210 plus tower armour. You'll want that HP on Elder Isle.",
            desc_vi: "Nhận thủ công mốc +50 Max HP tại các tầng 60, 160, 210 và nhặt trọn bộ Tower Armour. Bạn sẽ cực kỳ cần số HP này trên Đảo Elder.",
            tags_en: ["21:00", "Combat", "Tower"],
            tags_vi: ["21:00", "Combat", "Tháp"]
          },
          {
            id: "p6_3",
            time: "12:00",
            category: "fishing",
            title_en: "Start fishing climb toward lobster (Fishing 50) with Blessed Rod (2.5×)",
            title_vi: "Cày Fishing lên 50 (câu Tôm hùm - Lobster) bằng cần Blessed Rod 2.5×",
            desc_en: "Farm meat carries mid-tier, but boss fights and top dungeons want lobster and better. Abyssal Lagoon brings lobster too.",
            desc_vi: "Thịt Farm chỉ gánh được tier trung, boss và dungeon cấp cao bắt buộc phải có Lobster trở lên.",
            tags_en: ["12:00", "Fishing", "Food"],
            tags_vi: ["12:00", "Câu cá", "Thức ăn"]
          },
          {
            id: "p6_4",
            time: "21:00",
            category: "combat",
            title_en: "At combat 50, queue King Black Dragon",
            title_vi: "Đạt Combat 50: Queue săn King Black Dragon (KBD)",
            desc_en: "Fight ends at the kill (~14 min and ~37 lobster at combat 50). Dragon bones + XP. Dragon weapons (1/200, Attack 60) lose to Abyssal Whip.",
            desc_vi: "Mỗi trận đấu kết thúc khi boss chết (~14 phút và tiêu tốn ~37 lobster ở Combat 50). Thưởng xương rồng và XP; vũ khí rồng (1/200, Atk 60) vẫn thua Abyssal Whip.",
            tags_en: ["21:00", "Combat", "Boss"],
            tags_vi: ["21:00", "Combat", "Boss"]
          },
          {
            id: "p6_5",
            time: "12:00",
            category: "gathering",
            title_en: "Run level-40 expeditions (Dwarven Depths, Corrupted Canopy, Abyssal Lagoon) as daytime filler",
            title_vi: "Chạy các thám hiểm Level 40 làm việc lấp đầy ban ngày",
            desc_en: "3.25× tools drop at 1/500 and need skill 70, don't plan around them.",
            desc_vi: "Dwarven Depths, Corrupted Canopy, Abyssal Lagoon. Công cụ 3.25× ở đây rơi tỉ lệ 1/500 và cần level 70 nên không cần cố cày.",
            tags_en: ["12:00", "Expeditions"],
            tags_vi: ["12:00", "Thám hiểm"]
          }
        ]
      },
      {
        id: "phase7",
        title_en: "PHASE 7: MONTHS 6–8 – THE DOCK",
        title_vi: "GIAI ĐOẠN 7: THÁNG 6–8 – THE DOCK (CHUẨN BỊ RA KHƠI)",
        subtitle_en: "Construction 90, combat 90 and Sea Serpent stand between you and Elder Isle (+40% XP).",
        subtitle_vi: "Construction 90, Combat 90, hạ gục Sea Serpent để mở khóa Đảo Elder.",
        tasks: [
          {
            id: "p7_1",
            time: "any",
            category: "town",
            title_en: "Build Queue Master T2/T3 (6th–7th slots) before Chronos Spire T2/T3",
            title_vi: "Xây Queue Master T2/T3 (mở ô queue thứ 6 và thứ 7)",
            desc_en: "QM T2 wants 2,000 mithril nails (Smithing 55).",
            desc_vi: "QM T2 cần 2.000 Mithril nails (đây là lý do cần Smithing 55). Xây trước Chronos Spire T2/T3.",
            tags_en: ["Any", "Town", "Queue"],
            tags_vi: ["Any", "Thị trấn", "Hàng đợi"]
          },
          {
            id: "p7_2",
            time: "any",
            category: "town",
            title_en: "At Construction 90: build The Dock (~2.75M coins, 1.1k magic + 1.1k yew planks, 4.4k mithril nails)",
            title_vi: "Tại Construction 90: Xây dựng The Dock",
            desc_en: "Needs Woodcutting/Fletching 75 and Smithing 55.",
            desc_vi: "Chi phí ~2.75M coin, 1.100 magic planks, 1.100 yew planks, 4.400 mithril nails (cần Woodcutting / Fletching 75).",
            tags_en: ["Any", "Construction", "Dock"],
            tags_vi: ["Any", "Xây dựng", "Bến tàu"]
          },
          {
            id: "p7_3",
            time: "21:00",
            category: "combat",
            title_en: "Get combat level 90 (Attack/Strength 90 with Defence + HP adding to 126)",
            title_vi: "Đưa Combat lên cấp 90",
            desc_en: "Gear decides Sea Serpent fight: Whip and ~370 armour Defence (Tower Helm/Shield/Amulet/Cape, Slayer body/legs, rune boots) wins every time in ~25 min for ~160 shark. 250 Defence loses.",
            desc_vi: "Attack / Strength 90 kèm tổng Defence + HP đạt 126 là đủ mốc. Giáp bắt buộc ~370 Defence.",
            tags_en: ["21:00", "Combat"],
            tags_vi: ["21:00", "Combat"]
          },
          {
            id: "p7_4",
            time: "17:00",
            category: "combat",
            title_en: "Kill the Sea Serpent once (Mainland Combat tab)",
            title_vi: "Hạ gục Sea Serpent một lần duy nhất",
            desc_en: "Appears on mainland Combat tab once Dock exists. Ranged Defence is only 60 if you have a bow. One win unlocks sailing.",
            desc_vi: "Xuất hiện trên tab Combat đất liền khi The Dock hoàn thành. Cần Abyssal Whip và giáp đạt ~370 Defence. Thắng 1 lần mở khóa Sailing.",
            tags_en: ["17:00", "Boss", "Combat"],
            tags_vi: ["17:00", "Boss", "Combat"]
          },
          {
            id: "p7_5",
            time: "any",
            category: "routine",
            title_en: "CRITICAL: Before you sail, collect everything!",
            title_vi: "Thu hoạch sạch sẽ đất liền trước khi giương buồm",
            desc_en: "Mainland completely freezes while on the isle. Isle queue holds 3. You CANNOT sail while ANY session (even finished) is waiting to be collected!",
            desc_vi: "Đất liền sẽ đóng băng hoàn toàn khi ở đảo. Queue đảo chỉ có 3 ô. Bạn KHÔNG THỂ nhổ neo nếu còn bất kỳ session nào đang chờ bấm Collect!",
            tags_en: ["Any", "Warning", "Sailing"],
            tags_vi: ["Any", "Cảnh báo", "Ra khơi"]
          }
        ]
      },
      {
        id: "phase8",
        title_en: "PHASE 8: THE ISLE SPRINT (~1 MONTH)",
        title_vi: "GIAI ĐOẠN 8: THE ISLE SPRINT (~1 THÁNG TRÊN ĐẢO ELDER)",
        subtitle_en: "Equal footing for everyone. Craft 8 Elder pieces socketed with Sapphires for permanent +40% mainland XP.",
        subtitle_vi: "Đồng cân đồng lạng, rèn 8 món Elder khảm Sapphire kích hoạt +40% XP toàn game.",
        tasks: [
          {
            id: "p8_1",
            time: "12:00",
            category: "crafting",
            title_en: "Mine, chop, smelt and smith Coastal armour",
            title_vi: "Đào quặng, đốn gỗ, nung và rèn bộ giáp Coastal armour",
            desc_en: "Isle Smithing 1–5, no stat requirements, beats best mainland gear. Upgrade to Grove (30) and Volcanic (60).",
            desc_vi: "Isle Smithing 1–5, không yêu cầu stat, mạnh hơn bất kỳ giáp đất liền nào. Nâng cấp lên Grove (30) và Volcanic (60) khi tăng level.",
            tags_en: ["12:00", "Isle", "Smithing"],
            tags_vi: ["12:00", "Đảo", "Rèn đúc"]
          },
          {
            id: "p8_2",
            time: "12:00",
            category: "cooking",
            title_en: "Fish + cook to 60 for Lavafin (heals 26)",
            title_vi: "Câu cá & Nấu ăn lên 60 để lấy cá Lavafin (Hồi 26 máu)",
            desc_en: "Heals 26 (~13 sessions). If mainland level is below isle recipe, start it LIVE: queue checks mainland level and silently drops action.",
            desc_vi: "Hồi 26 HP (~13 session). Nếu cấp đất liền thấp hơn công thức đảo, hãy bấm chạy trực tiếp (Live), không đưa vào queue.",
            tags_en: ["12:00", "Isle", "Food"],
            tags_vi: ["12:00", "Đảo", "Thức ăn"]
          },
          {
            id: "p8_3",
            time: "21:00",
            category: "combat",
            title_en: "Level isle combat by dying forward (Beach & Cliffs with no food)",
            title_vi: "Luyện combat đảo bằng chiến thuật Chết Để Tiến Lên (Dying Forward)",
            desc_en: "At isle level 1 you can't survive Beach & Cliffs. Go in with NO food: isle deaths cost nothing and every kill still pays XP. ~8 runs to 60, ~19 to 85.",
            desc_vi: "Đi Beach & Cliffs không mang thức ăn. Chết trên đảo không bị phạt, mỗi con quái chết vẫn cho 100% XP. ~8 run lên 60, ~19 run lên 85.",
            tags_en: ["21:00", "Isle", "Combat"],
            tags_vi: ["21:00", "Đảo", "Combat"]
          },
          {
            id: "p8_4",
            time: "21:00",
            category: "combat",
            title_en: "At isle combat 85, farm Abyssal Depths for sigils",
            title_vi: "Isle Combat 85: Farm Abyssal Depths lấy Sigils",
            desc_en: "1.2 sigils + ~380 essence per clear, ~190 food per sigil (Beach costs 430–600).",
            desc_vi: "1.2 sigils + ~380 essence mỗi lần clear, tốn ~190 thức ăn/sigil (Beach tốn tận 430–600).",
            tags_en: ["21:00", "Isle", "Sigils"],
            tags_vi: ["21:00", "Đảo", "Sigils"]
          },
          {
            id: "p8_5",
            time: "any",
            category: "crafting",
            title_en: "Craft the 8 Elder pieces LIVE (isle Smithing 85–90, 5 sigils each)",
            title_vi: "Tự tay rèn trực tiếp 8 món Elder (Isle Smithing 85–90, 5 sigils/món)",
            desc_en: "MUST craft LIVE: a failed queued craft eats its 5 sigils!",
            desc_vi: "BẮT BUỘC rèn Live khi đang online: Nếu craft trong queue bị xịt, bạn sẽ mất trắng 5 sigils!",
            tags_en: ["Any", "Isle", "Warning"],
            tags_vi: ["Any", "Đảo", "Cảnh báo"]
          },
          {
            id: "p8_6",
            time: "any",
            category: "crafting",
            title_en: "Socket a Sapphire in each Elder piece (300 essence each) for +40% mainland XP",
            title_vi: "Mua 8 viên Sapphire (300 essence/viên) và khảm vào cả 8 món Elder",
            desc_en: "Each Sapphire is +5% XP on almost all mainland XP (+40% with all 8). Skip isle Agility.",
            desc_vi: "Mỗi viên +5% XP trên đất liền, đủ 8 viên là +40% XP vĩnh viễn trên hầu hết các hoạt động đất liền! Bỏ qua Isle Agility.",
            tags_en: ["Any", "Isle", "Endgame"],
            tags_vi: ["Any", "Đảo", "Endgame"]
          }
        ]
      },
      {
        id: "phase9",
        title_en: "PHASE 9: MONTHS 8+ – THE LONG BURN",
        title_vi: "GIAI ĐOẠN 9: THÁNG 8+ – THE LONG BURN (ENDGAME MAX 99)",
        subtitle_en: "Every remaining skill to 99. Divine tool set, all prestige tiers, max speed floor ~28 min.",
        subtitle_vi: "Đưa mọi kỹ năng còn lại lên 99, hoàn tất tất cả công trình, sở hữu bộ Divine Tools.",
        tasks: [
          {
            id: "p9_1",
            time: "21:00",
            category: "combat",
            title_en: "Combat skills to 99: Frozen Citadel → Abyssal Throne, alternating weapon types",
            title_vi: "Combat lên 99: Frozen Citadel → Abyssal Throne, đổi luân phiên vũ khí",
            desc_en: "~7–11 nights per style from 75. Food limit (15–20k fish per 99). Train Ranged in evenings when watched.",
            desc_vi: "~7–11 đêm mỗi nhánh vũ khí từ mốc 75. Chuẩn bị 15k–20k cá cho mỗi mốc 99. Train Ranged vào buổi tối khi có thể giám sát.",
            tags_en: ["21:00", "Combat", "Max99"],
            tags_vi: ["21:00", "Combat", "Max99"]
          },
          {
            id: "p9_2",
            time: "12:00",
            category: "gathering",
            title_en: "Gathering 99s through daytime rotation, one skill at a time",
            title_vi: "Gathering lên 99 trong ca ngày, cày từng kỹ năng một",
            desc_en: "True endgame: Divine tools (3.5×), Sapphires and full queue slots make it move.",
            desc_vi: "Tận dụng trọn bộ Divine tools (3.5×), 8 ngọc Sapphire và mở full ô queue.",
            tags_en: ["12:00", "Gathering", "Max99"],
            tags_vi: ["12:00", "Khai thác", "Max99"]
          },
          {
            id: "p9_3",
            time: "21:00",
            category: "crafting",
            title_en: "Crafting 99s ride stockpiles: cook, smith, fletch, build; bury banked bones for Prayer",
            title_vi: "Crafting lên 99 tận dụng kho tài nguyên: Cook, Smith, Fletch, Build",
            desc_en: "Runecrafting doubles rune output at 50, triples at 75.",
            desc_vi: "Bury toàn bộ xương dự trữ để đưa Prayer lên 99. Runecrafting x2 rune ở Lv 50 và x3 rune ở Lv 75.",
            tags_en: ["21:00", "Crafting", "Prayer"],
            tags_vi: ["21:00", "Chế tạo", "Prayer"]
          },
          {
            id: "p9_4",
            time: "any",
            category: "prestige",
            title_en: "Prestige every 99",
            title_vi: "Prestige mọi kỹ năng khi chạm mốc 99",
            desc_en: "Each prestige gives 48 h 2× XP, permanent XP tiers (up to +40%) and upgrade points.",
            desc_vi: "Nhận 48 giờ x2 XP, mở tầng bonus vĩnh viễn (lên tới +40%) và điểm nâng cấp quý giá.",
            tags_en: ["Any", "Prestige"],
            tags_vi: ["Any", "Prestige"]
          },
          {
            id: "p9_5",
            time: "any",
            category: "slayer",
            title_en: "Spend Slayer points on large XP lamps (200 pts = 50k XP) aimed at slowest skill",
            title_vi: "Dùng điểm Slayer mua Large XP Lamps (200 điểm = 50.000 XP)",
            desc_en: "Usually Crafting or Herblore.",
            desc_vi: "Bơm toàn bộ vào kỹ năng chậm nhất (thường là Crafting hoặc Herblore).",
            tags_en: ["Any", "Slayer", "XP"],
            tags_vi: ["Any", "Slayer", "XP"]
          },
          {
            id: "p9_6",
            time: "any",
            category: "town",
            title_en: "Finish buildings: Monument stage 4 'Gilded' (8th slot, 161M) & Chronos Spire T1–3",
            title_vi: "Hoàn thiện các công trình: Monument Gilded (ô queue 8, 161M) & Chronos Spire T1–3",
            desc_en: "3 Agility prestiges plus Spire T3 bring sessions to ~28 minutes absolute floor.",
            desc_vi: "3 lần Agility prestige cộng Chronos Spire T3 kéo thời gian mỗi lượt xuống sàn ~28 phút cho mọi hoạt động.",
            tags_en: ["Any", "Town", "Endgame"],
            tags_vi: ["Any", "Thị trấn", "Endgame"]
          },
          {
            id: "p9_7",
            time: "07:00",
            category: "routine",
            title_en: "Complete all 5 weekly quests every week until divine tool set is full",
            title_vi: "Hoàn thành đủ 5 Weekly quests mỗi tuần cho tới khi đủ 9 công cụ Divine",
            desc_en: "Rolls 1/26 with 1.5× pity per miss (guaranteed within 10 weeks). ~1.5 years for all 9. Check Monday mornings.",
            desc_vi: "Kiểm tra sáng thứ Hai hàng tuần. Bonus roll 1/26 kèm bảo hiểm x1.5 mỗi lần miss (chắc chắn có trong 10 tuần), tổng cộng 9 công cụ mất ~1.5 năm.",
            tags_en: ["07:00", "Weekly", "Divine"],
            tags_vi: ["07:00", "Hàng tuần", "Divine"]
          }
        ]
      }
    ];

    // Translation dictionary for general UI elements
    const I18N = {
      en: {
        progressLabel: "Overall Progress:",
        tabRoadmap: "Roadmap (9 Phases)",
        tabRoutine: "AFK Schedule",
        tabCalculators: "Calculators & Checkers",
        tabRules: "The 4 Core Rules",
        expandAll: "Expand All",
        collapseAll: "Collapse All",
        searchPlaceholder: "Search quest, dungeon, gear, monster, item...",
        filterAll: "All",
        filterMorning: "07:00 Morning",
        filterDay: "Daytime",
        filterEvening: "17:00 Evening",
        filterNight: "21:00 Night",
        filterCombat: "Combat",
        filterAgility: "Agility",
        filterUncompleted: "Uncompleted",
        rulesBannerTitle: "The Four Rules for Ironman Mode",
        rulesBannerSub: "Non-negotiable",
        rule1Title: "1. End of Queue",
        rule1Desc: "Always end the queue on a long job so no session time is wasted offline.",
        rule2Title: "2. Check Quest Panel",
        rule2Desc: "Check the quest panel before choosing any target to gather or kill.",
        rule3Title: "3. Overnight Combat",
        rule3Desc: "Overnight combat runs one dungeon below your hardest to prevent death penalty.",
        rule4Title: "4. Unattended Combat",
        rule4Desc: "Unattended combat means melee. Never train ranged AFK as it burns arrows.",
        completedBadge: "COMPLETED",
        selectAll: "Select All",
        deselectAll: "Deselect All"
      },
      vi: {
        progressLabel: "Tiến độ tổng thể:",
        tabRoadmap: "Lộ Trình Toàn Diện (9 Giai Đoạn)",
        tabRoutine: "Thời Khắc Biểu AFK Hàng Ngày",
        tabCalculators: "Công Cụ Xây Dựng & Boss",
        tabRules: "4 Nguyên Tắc Cốt Lõi",
        expandAll: "Mở rộng tất cả",
        collapseAll: "Thu gọn tất cả",
        searchPlaceholder: "Tìm kiếm nhiệm vụ, quái, trang bị, công thức...",
        filterAll: "Tất cả",
        filterMorning: "07:00 Sáng",
        filterDay: "Ban ngày",
        filterEvening: "17:00 Chiều",
        filterNight: "21:00 Đêm",
        filterCombat: "Combat",
        filterAgility: "Agility",
        filterUncompleted: "Chưa xong",
        rulesBannerTitle: "4 Nguyên Tắc Sống Còn Cho Dân Cày Chay (Ironman Mode)",
        rulesBannerSub: "Bất di bất dịch",
        rule1Title: "1. Chốt Đuôi Hàng Đợi",
        rule1Desc: "Luôn kết thúc lượt hàng đợi bằng một công việc dài (Long job) để không lãng phí thời gian.",
        rule2Title: "2. Bảng Nhiệm Vụ",
        rule2Desc: "Luôn kiểm tra bảng quest trước khi quyết định farm quái hoặc tài nguyên.",
        rule3Title: "3. Farm Đêm An Toàn",
        rule3Desc: "Luôn chọn dungeon thấp hơn 1 bậc so với tầng khó nhất để tránh chết mất đồ.",
        rule4Title: "4. Combat Khi AFK",
        rule4Desc: "Tuyệt đối dùng Melee (Cận chiến). Không train Ranged khi AFK vì sẽ cạn sạch tên.",
        completedBadge: "HOÀN TẤT",
        selectAll: "Chọn tất cả",
        deselectAll: "Bỏ chọn tất cả"
      },
      both: {
        progressLabel: "Overall Progress / Tiến độ:",
        tabRoadmap: "Roadmap / Lộ Trình (9 Phases)",
        tabRoutine: "AFK Schedule / Thời Khắc Biểu",
        tabCalculators: "Calculators / Công Cụ Xây Dựng & Boss",
        tabRules: "The 4 Rules / 4 Nguyên Tắc Cốt Lõi",
        expandAll: "Expand All / Mở rộng",
        collapseAll: "Collapse All / Thu gọn",
        searchPlaceholder: "Search quest, item, monster / Tìm nhiệm vụ, trang bị...",
        filterAll: "All / Tất cả",
        filterMorning: "07:00 Morning / Sáng",
        filterDay: "Daytime / Ban ngày",
        filterEvening: "17:00 Evening / Tối",
        filterNight: "21:00 Night / Đêm",
        filterCombat: "Combat",
        filterAgility: "Agility",
        filterUncompleted: "Uncompleted / Chưa xong",
        rulesBannerTitle: "The 4 Rules / 4 Nguyên Tắc Sống Còn (Ironman Mode)",
        rulesBannerSub: "Non-negotiable / Bất di bất dịch",
        rule1Title: "1. End of Queue (Chốt Đuôi)",
        rule1Desc: "Always end queue on a long job. Luôn kết thúc hàng đợi bằng việc dài để không phí thời gian offline.",
        rule2Title: "2. Check Quest Panel (Kiểm Tra Quest)",
        rule2Desc: "Check quests before choosing any target. Luôn check quest trước khi đi farm.",
        rule3Title: "3. Overnight Combat (Dungeon Đêm)",
        rule3Desc: "Run one dungeon below your hardest. Đi dungeon thấp hơn 1 bậc tránh chết mất 90% đồ.",
        rule4Title: "4. Unattended Melee (Chỉ Dùng Melee)",
        rule4Desc: "Unattended combat means melee. Tuyệt đối dùng Melee khi AFK, tránh cạn sạch tên.",
        completedBadge: "DONE / HOÀN TẤT",
        selectAll: "Select All / Chọn tất cả",
        deselectAll: "Deselect All / Bỏ chọn"
      }
    };


// Application Constants & Whitelists
const VALID_LANGS = ["en", "vi", "both"];
const VALID_FILTERS = ["all", "07:00", "12:00", "17:00", "21:00", "combat", "agility", "uncompleted"];
const SAFE_ID_PATTERN = /^[a-zA-Z0-9_\-]{1,64}$/;
const STORAGE_KEY = "idlefantasy_ironman_state";

// Global Cloud Storage Variables
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
let db = null;
let auth = null;
let currentUser = null;
let userId = null;

// Application State
let state = {
  completed: {},
  audioEnabled: true,
  activeFilter: "all",
  searchQuery: "",
  collapsedPhases: {},
  rulesBannerCollapsed: false,
  lang: "both" // 'en' | 'vi' | 'both'
};

/**
 * Validates and sanitizes raw state input to protect against prototype
 * pollution, arbitrary property injection, and corrupted data types.
 * @param {unknown} raw - Untrusted input object
 * @returns {object|null} - Sanitized state object or null if invalid
 */
function sanitizeState(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return null;
  }

  const clean = {
    completed: {},
    collapsedPhases: {},
    rulesBannerCollapsed: false,
    lang: "both",
    audioEnabled: true
  };

  // 1. Sanitize completed tasks map
  if (raw.completed && typeof raw.completed === "object" && !Array.isArray(raw.completed)) {
    for (const key of Object.keys(raw.completed)) {
      if (key !== "__proto__" && key !== "constructor" && key !== "prototype" && SAFE_ID_PATTERN.test(key)) {
        clean.completed[key] = Boolean(raw.completed[key]);
      }
    }
  }

  // 2. Sanitize collapsed phases map
  if (raw.collapsedPhases && typeof raw.collapsedPhases === "object" && !Array.isArray(raw.collapsedPhases)) {
    for (const key of Object.keys(raw.collapsedPhases)) {
      if (key !== "__proto__" && key !== "constructor" && key !== "prototype" && SAFE_ID_PATTERN.test(key)) {
        clean.collapsedPhases[key] = Boolean(raw.collapsedPhases[key]);
      }
    }
  }

  // 3. Sanitize rules banner collapsed flag
  if (typeof raw.rulesBannerCollapsed === "boolean") {
    clean.rulesBannerCollapsed = raw.rulesBannerCollapsed;
  }

  // 4. Sanitize language selection (strict whitelist)
  if (typeof raw.lang === "string" && VALID_LANGS.includes(raw.lang)) {
    clean.lang = raw.lang;
  }

  // 5. Sanitize audio flag
  if (typeof raw.audioEnabled === "boolean") {
    clean.audioEnabled = raw.audioEnabled;
  }

  return clean;
}

// Audio Feedback System
let audioSynth = null;
function playCheckSound() {
  if (!state.audioEnabled) return;
  try {
    if (!audioSynth && window.Tone) {
      audioSynth = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: "triangle" },
        envelope: { attack: 0.005, decay: 0.15, sustain: 0, release: 0.1 }
      }).toDestination();
      audioSynth.volume.value = -12;
    }
    if (window.Tone && Tone.context && Tone.context.state !== "running") {
      Tone.start();
    }
    if (audioSynth) {
      audioSynth.triggerAttackRelease(["E5", "B5"], "16n");
    }
  } catch (e) {
    console.warn("Audio feedback not available yet", e);
  }
}

/**
 * Toast notification using safe DOM construction (no innerHTML).
 * @param {string} msg
 * @param {'success'|'error'} type
 */
function showToast(msg, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `p-3 rounded-xl text-xs font-semibold shadow-xl border flex items-center gap-2.5 transform transition-all duration-300 translate-y-2 pointer-events-auto ${
    type === "success" 
      ? "bg-iron-900 border-amber-500/50 text-amber-300" 
      : "bg-iron-900 border-rose-500/50 text-rose-300"
  }`;

  const dot = document.createElement("span");
  dot.className = `w-2 h-2 rounded-full shrink-0 ${type === "success" ? "bg-amber-400" : "bg-rose-400"}`;

  const textNode = document.createElement("span");
  textNode.textContent = String(msg);

  toast.appendChild(dot);
  toast.appendChild(textNode);
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("translate-y-2");
  }, 10);

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/**
 * Renders the 4 Core Rules Banner safely using DOM APIs.
 */
function renderFourRulesBanner() {
  const banner = document.getElementById("coreRulesBanner");
  if (!banner) return;
  const dict = I18N[state.lang] || I18N.both;
  const isCollapsed = Boolean(state.rulesBannerCollapsed);

  banner.replaceChildren();

  if (isCollapsed) {
    banner.className = "bg-iron-900 border border-iron-800 rounded-xl px-4 py-3 relative overflow-hidden shadow-md transition-all";

    const wrap = document.createElement("div");
    wrap.className = "flex items-center justify-between gap-3 flex-wrap";

    const left = document.createElement("div");
    left.className = "flex items-center gap-2.5";

    const iconSpan = document.createElement("span");
    iconSpan.className = "p-1.5 bg-amber-500/20 text-amber-400 rounded-lg shrink-0";
    iconSpan.innerHTML = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>';

    const titleSpan = document.createElement("span");
    titleSpan.className = "font-fantasy font-bold text-amber-400 text-xs sm:text-sm tracking-wide uppercase";
    titleSpan.textContent = dict.rulesBannerTitle;

    const summarySpan = document.createElement("span");
    summarySpan.className = "text-xs text-iron-400 hidden lg:inline";
    summarySpan.textContent = "• 1. Chốt đuôi | 2. Check quest | 3. Farm đêm an toàn | 4. Melee AFK";

    left.appendChild(iconSpan);
    left.appendChild(titleSpan);
    left.appendChild(summarySpan);

    const toggleBtn = document.createElement("button");
    toggleBtn.id = "toggleBannerCollapseBtn";
    toggleBtn.className = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-iron-850 hover:bg-iron-800 text-iron-300 hover:text-amber-300 border border-iron-700/80 transition flex items-center gap-1.5 shadow-sm";

    const btnText = document.createElement("span");
    btnText.textContent = state.lang === 'vi' ? 'Xem chi tiết' : state.lang === 'en' ? 'Show Rules' : 'Chi tiết / Show';

    const btnIcon = document.createElement("span");
    btnIcon.innerHTML = '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

    toggleBtn.appendChild(btnText);
    toggleBtn.appendChild(btnIcon);

    wrap.appendChild(left);
    wrap.appendChild(toggleBtn);
    banner.appendChild(wrap);

    toggleBtn.addEventListener("click", () => {
      state.rulesBannerCollapsed = !state.rulesBannerCollapsed;
      saveState();
      renderFourRulesBanner();
    });
  } else {
    banner.className = "bg-gradient-to-r from-amber-950/30 via-iron-900 to-iron-900 border border-amber-600/30 rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-lg transition-all";

    const blurDecor = document.createElement("div");
    blurDecor.className = "absolute -right-10 -bottom-10 w-44 h-44 bg-amber-500/5 rounded-full blur-2xl pointer-events-none";
    banner.appendChild(blurDecor);

    const header = document.createElement("div");
    header.className = "flex items-center justify-between mb-4 flex-wrap gap-2";

    const left = document.createElement("div");
    left.className = "flex items-center gap-2";

    const iconSpan = document.createElement("span");
    iconSpan.className = "p-1.5 bg-amber-500/20 text-amber-400 rounded-lg shrink-0";
    iconSpan.innerHTML = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>';

    const titleH2 = document.createElement("h2");
    titleH2.className = "font-fantasy font-bold text-amber-400 text-sm tracking-wide uppercase";
    titleH2.textContent = dict.rulesBannerTitle;

    const subSpan = document.createElement("span");
    subSpan.className = "text-xs text-iron-400 font-mono hidden sm:inline ml-1";
    subSpan.textContent = `• ${dict.rulesBannerSub}`;

    left.appendChild(iconSpan);
    left.appendChild(titleH2);
    left.appendChild(subSpan);

    const toggleBtn = document.createElement("button");
    toggleBtn.id = "toggleBannerCollapseBtn";
    toggleBtn.className = "px-2.5 py-1 rounded-lg text-xs font-medium text-iron-400 hover:text-iron-200 hover:bg-iron-850 border border-iron-800 transition flex items-center gap-1";

    const btnText = document.createElement("span");
    btnText.textContent = state.lang === 'vi' ? 'Thu gọn' : state.lang === 'en' ? 'Collapse' : 'Thu gọn / Hide';

    const btnIcon = document.createElement("span");
    btnIcon.innerHTML = '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>';

    toggleBtn.appendChild(btnText);
    toggleBtn.appendChild(btnIcon);

    header.appendChild(left);
    header.appendChild(toggleBtn);
    banner.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3";

    const rules = [
      { num: "1", title: dict.rule1Title, desc: dict.rule1Desc },
      { num: "2", title: dict.rule2Title, desc: dict.rule2Desc },
      { num: "3", title: dict.rule3Title, desc: dict.rule3Desc },
      { num: "4", title: dict.rule4Title, desc: dict.rule4Desc }
    ];

    rules.forEach(r => {
      const card = document.createElement("div");
      card.className = "bg-iron-850/80 border border-iron-700/60 rounded-xl p-3.5 hover:border-amber-500/40 transition";

      const rTitle = document.createElement("div");
      rTitle.className = "text-amber-400 font-bold text-xs mb-1.5 flex items-center gap-2";

      const numBadge = document.createElement("span");
      numBadge.className = "w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-[11px] font-mono font-bold shrink-0";
      numBadge.textContent = r.num;

      const titleText = document.createElement("span");
      titleText.textContent = r.title;

      rTitle.appendChild(numBadge);
      rTitle.appendChild(titleText);

      const rDesc = document.createElement("p");
      rDesc.className = "text-xs text-iron-300 leading-relaxed";
      rDesc.textContent = r.desc;

      card.appendChild(rTitle);
      card.appendChild(rDesc);
      grid.appendChild(card);
    });

    banner.appendChild(grid);

    toggleBtn.addEventListener("click", () => {
      state.rulesBannerCollapsed = !state.rulesBannerCollapsed;
      saveState();
      renderFourRulesBanner();
    });
  }
}

/**
 * Updates UI labels and filters according to the current language.
 */
function updateLanguageUI() {
  const dict = I18N[state.lang] || I18N.both;

  const pLabel = document.getElementById("headerProgressLabel");
  if (pLabel) pLabel.textContent = dict.progressLabel;

  const tabRoadmap = document.getElementById("tabLabelRoadmap");
  if (tabRoadmap) tabRoadmap.textContent = dict.tabRoadmap;
  const tabRoutine = document.getElementById("tabLabelRoutine");
  if (tabRoutine) tabRoutine.textContent = dict.tabRoutine;
  const tabCalc = document.getElementById("tabLabelCalculators");
  if (tabCalc) tabCalc.textContent = dict.tabCalculators;
  const tabRules = document.getElementById("tabLabelRules");
  if (tabRules) tabRules.textContent = dict.tabRules;

  const expandAllBtn = document.getElementById("expandAllBtn");
  if (expandAllBtn) expandAllBtn.textContent = dict.expandAll;
  const collapseAllBtn = document.getElementById("collapseAllBtn");
  if (collapseAllBtn) collapseAllBtn.textContent = dict.collapseAll;

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.placeholder = dict.searchPlaceholder;

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    const f = btn.dataset.filter;
    if (f === "all") btn.textContent = dict.filterAll;
    if (f === "07:00") btn.textContent = dict.filterMorning;
    if (f === "12:00") btn.textContent = dict.filterDay;
    if (f === "17:00") btn.textContent = dict.filterEvening;
    if (f === "21:00") btn.textContent = dict.filterNight;
    if (f === "combat") btn.textContent = dict.filterCombat;
    if (f === "agility") btn.textContent = dict.filterAgility;
    if (f === "uncompleted") btn.textContent = dict.filterUncompleted;
  });

  const btnEn = document.getElementById("langBtnEn");
  const btnVi = document.getElementById("langBtnVi");
  const btnBoth = document.getElementById("langBtnBoth");

  [btnEn, btnVi, btnBoth].forEach(b => {
    if (b) {
      b.className = "px-2.5 py-1 rounded-lg transition text-iron-400 hover:text-iron-100 text-xs";
    }
  });

  if (state.lang === "en" && btnEn) {
    btnEn.className = "px-2.5 py-1 rounded-lg transition bg-amber-500 text-iron-950 font-bold shadow text-xs";
  } else if (state.lang === "vi" && btnVi) {
    btnVi.className = "px-2.5 py-1 rounded-lg transition bg-amber-500 text-iron-950 font-bold shadow text-xs";
  } else if (btnBoth) {
    btnBoth.className = "px-3 py-1 rounded-lg transition bg-amber-500 text-iron-950 font-bold shadow text-xs";
  }

  renderFourRulesBanner();
}

/**
 * Renders the Roadmap accordion phases and tasks.
 * Uses safe DOM manipulation APIs and textContent exclusively to prevent DOM XSS.
 */
function renderRoadmap() {
  const container = document.getElementById("phasesList");
  if (!container) return;

  container.replaceChildren();

  const query = state.searchQuery.toLowerCase().trim();
  const filter = state.activeFilter;
  const lang = state.lang;
  const dict = I18N[lang] || I18N.both;

  ROADMAP_DATA.forEach((phase) => {
    // Filter matching tasks
    const matchingTasks = phase.tasks.filter(task => {
      const matchQuery = !query || 
        task.title_en.toLowerCase().includes(query) || 
        task.title_vi.toLowerCase().includes(query) || 
        task.desc_en.toLowerCase().includes(query) ||
        task.desc_vi.toLowerCase().includes(query) ||
        task.tags_en.some(t => t.toLowerCase().includes(query)) ||
        task.tags_vi.some(t => t.toLowerCase().includes(query));

      if (!matchQuery) return false;

      const isDone = Boolean(state.completed[task.id]);
      if (filter === "uncompleted") return !isDone;
      if (filter === "07:00") return task.time === "07:00";
      if (filter === "12:00") return task.time === "12:00";
      if (filter === "17:00") return task.time === "17:00";
      if (filter === "21:00") return task.time === "21:00";
      if (filter === "combat") return task.category === "combat";
      if (filter === "agility") return task.category === "agility";
      return true;
    });

    if (matchingTasks.length === 0 && (query || filter !== "all")) {
      return;
    }

    const totalTasksInPhase = phase.tasks.length;
    const doneTasksInPhase = phase.tasks.filter(t => state.completed[t.id]).length;
    const phasePct = totalTasksInPhase === 0 ? 0 : Math.round((doneTasksInPhase / totalTasksInPhase) * 100);
    const isAllDone = totalTasksInPhase > 0 && doneTasksInPhase === totalTasksInPhase;
    const isCollapsed = Boolean(state.collapsedPhases[phase.id]);

    const phaseEl = document.createElement("div");
    phaseEl.className = "bg-iron-900 border border-iron-800 rounded-2xl overflow-hidden shadow-lg transition";

    const headerEl = document.createElement("div");
    headerEl.className = "p-4 sm:p-5 bg-iron-850/90 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none hover:bg-iron-800/90 transition border-b border-iron-800";
    headerEl.onclick = () => togglePhaseCollapse(phase.id);

    // Left block: toggle arrow + title & subtitle
    const leftBlock = document.createElement("div");
    leftBlock.className = "flex items-start sm:items-center gap-3";

    const arrowBtn = document.createElement("button");
    arrowBtn.className = "mt-0.5 sm:mt-0 p-1.5 rounded-lg bg-iron-800 text-iron-300 hover:text-amber-400 transition";
    arrowBtn.title = "Toggle phase";
    arrowBtn.innerHTML = `<svg class="w-4 h-4 transform transition-transform ${isCollapsed ? '-rotate-90' : 'rotate-0'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`;

    const titleContainer = document.createElement("div");

    const titleRow = document.createElement("div");
    titleRow.className = "flex flex-wrap items-center gap-2";

    const titleH3 = document.createElement("h3");
    titleH3.className = "font-fantasy font-bold text-amber-400 text-sm sm:text-base tracking-wide";

    if (lang === "vi") {
      titleH3.textContent = phase.title_vi;
    } else if (lang === "en") {
      titleH3.textContent = phase.title_en;
    } else {
      titleH3.textContent = phase.title_en;
      const viSpan = document.createElement("span");
      viSpan.className = "text-iron-300 font-sans font-normal text-xs ml-1.5";
      viSpan.textContent = `(${phase.title_vi})`;
      titleH3.appendChild(viSpan);
    }
    titleRow.appendChild(titleH3);

    if (phasePct === 100) {
      const doneBadge = document.createElement("span");
      doneBadge.className = "px-2.5 py-0.5 rounded text-[11px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold uppercase tracking-wider";
      doneBadge.textContent = dict.completedBadge;
      titleRow.appendChild(doneBadge);
    }
    titleContainer.appendChild(titleRow);

    const subtitleDiv = document.createElement("div");
    subtitleDiv.className = "text-xs text-iron-400 mt-0.5";

    if (lang === "vi") {
      subtitleDiv.textContent = phase.subtitle_vi;
    } else if (lang === "en") {
      subtitleDiv.textContent = phase.subtitle_en;
    } else {
      const enSub = document.createElement("span");
      enSub.className = "text-iron-300";
      enSub.textContent = phase.subtitle_en;
      const viSub = document.createElement("span");
      viSub.className = "block text-xs text-iron-400 mt-0.5";
      viSub.textContent = `🇻🇳 ${phase.subtitle_vi}`;
      subtitleDiv.appendChild(enSub);
      subtitleDiv.appendChild(viSub);
    }
    titleContainer.appendChild(subtitleDiv);

    leftBlock.appendChild(arrowBtn);
    leftBlock.appendChild(titleContainer);

    // Right block: Select all button + progress percentage
    const rightBlock = document.createElement("div");
    rightBlock.className = "flex items-center gap-3 self-end sm:self-center";

    const selectAllBtn = document.createElement("button");
    selectAllBtn.type = "button";
    selectAllBtn.className = `phase-select-all-btn text-xs px-3 py-1.5 rounded-lg font-semibold transition flex items-center gap-1.5 shadow-sm border ${
      isAllDone 
        ? 'bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border-rose-500/30' 
        : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/30'
    }`;
    selectAllBtn.title = isAllDone ? dict.deselectAll : dict.selectAll;

    const selectIcon = document.createElement("span");
    selectIcon.innerHTML = isAllDone
      ? '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'
      : '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';

    const selectText = document.createElement("span");
    selectText.textContent = isAllDone ? dict.deselectAll : dict.selectAll;

    selectAllBtn.appendChild(selectIcon);
    selectAllBtn.appendChild(selectText);

    selectAllBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const nextDoneState = !isAllDone;
      phase.tasks.forEach(t => {
        state.completed[t.id] = nextDoneState;
      });
      if (nextDoneState) {
        playCheckSound();
        showToast(lang === 'vi' ? `Đã chọn tất cả: ${phase.title_vi}` : `Selected all in: ${phase.title_en}`);
      } else {
        showToast(lang === 'vi' ? `Đã bỏ chọn tất cả: ${phase.title_vi}` : `Deselected all in: ${phase.title_en}`);
      }
      saveState();
      renderRoadmap();
    });

    const progressCol = document.createElement("div");
    progressCol.className = "text-right min-w-[80px]";

    const pctLabel = document.createElement("div");
    pctLabel.className = `font-mono text-xs font-bold ${phasePct === 100 ? 'text-emerald-400' : 'text-amber-400'}`;
    pctLabel.textContent = `${phasePct}% (${doneTasksInPhase}/${totalTasksInPhase})`;

    const progressTrack = document.createElement("div");
    progressTrack.className = "w-20 sm:w-28 bg-iron-950 rounded-full h-2 overflow-hidden mt-1 border border-iron-800";

    const progressBar = document.createElement("div");
    progressBar.className = `${phasePct === 100 ? 'bg-emerald-400' : 'bg-gradient-to-r from-amber-500 to-amber-400'} h-full transition-all duration-300`;
    progressBar.style.width = `${phasePct}%`;

    progressTrack.appendChild(progressBar);
    progressCol.appendChild(pctLabel);
    progressCol.appendChild(progressTrack);

    rightBlock.appendChild(selectAllBtn);
    rightBlock.appendChild(progressCol);

    headerEl.appendChild(leftBlock);
    headerEl.appendChild(rightBlock);
    phaseEl.appendChild(headerEl);

    // Tasks list container
    const tasksContainer = document.createElement("div");
    tasksContainer.className = `p-4 sm:p-5 space-y-3 ${isCollapsed ? 'hidden' : 'block'}`;

    matchingTasks.forEach(task => {
      const isDone = Boolean(state.completed[task.id]);
      const taskEl = document.createElement("div");

      let borderLeftColor = "border-l-4 border-l-amber-500/70";
      if (task.time === "07:00") borderLeftColor = "border-l-4 border-l-amber-500";
      else if (task.time === "12:00") borderLeftColor = "border-l-4 border-l-cyan-500";
      else if (task.time === "17:00") borderLeftColor = "border-l-4 border-l-emerald-500";
      else if (task.time === "21:00") borderLeftColor = "border-l-4 border-l-indigo-500";
      if (task.category === "combat") borderLeftColor = "border-l-4 border-l-rose-500";
      if (isDone) borderLeftColor = "border-l-4 border-l-iron-700";

      taskEl.className = `p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3 sm:gap-4 ${borderLeftColor} ${
        isDone 
          ? 'bg-iron-950/60 border-iron-800/80' 
          : 'bg-iron-850/70 border-iron-700/70 hover:border-iron-600 hover:bg-iron-850 shadow-sm'
      }`;

      // 1. Checkbox element
      const checkCol = document.createElement("div");
      checkCol.className = "pt-0.5 shrink-0";

      const checkLabel = document.createElement("label");
      checkLabel.htmlFor = `check_${task.id}`;
      checkLabel.className = "flex items-center justify-center p-2.5 -m-2.5 cursor-pointer touch-manipulation select-none";
      checkLabel.title = isDone ? "Bỏ chọn" : "Hoàn thành";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `check_${task.id}`;
      checkbox.checked = isDone;
      checkbox.className = "w-5 h-5 rounded-md border-iron-600 bg-iron-900 text-amber-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-amber-500";

      checkLabel.appendChild(checkbox);
      checkCol.appendChild(checkLabel);
      taskEl.appendChild(checkCol);

      // 2. Body column
      const bodyCol = document.createElement("div");
      bodyCol.className = "flex-1 space-y-1.5";

      // Title & Time row
      const titleRow = document.createElement("div");
      titleRow.className = "flex flex-wrap items-center gap-2";

      const titleLabel = document.createElement("label");
      titleLabel.htmlFor = `check_${task.id}`;
      titleLabel.className = `text-xs sm:text-sm font-semibold cursor-pointer ${isDone ? 'line-through text-iron-400' : 'text-iron-100 hover:text-amber-300'}`;

      if (lang === "en") {
        titleLabel.textContent = task.title_en;
      } else if (lang === "vi") {
        titleLabel.textContent = task.title_vi;
      } else {
        titleLabel.textContent = task.title_en;
        const viSub = document.createElement("span");
        viSub.className = "text-xs font-normal text-iron-300 block sm:inline sm:ml-2";
        viSub.textContent = `(${task.title_vi})`;
        titleLabel.appendChild(viSub);
      }
      titleRow.appendChild(titleLabel);

      // Time badge
      const timeBadge = document.createElement("span");
      let timeClasses = "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono font-bold ";
      let dotColor = "bg-iron-400";

      if (task.time === "07:00") {
        timeClasses += "bg-amber-500/15 text-amber-300 border border-amber-500/30";
        dotColor = "bg-amber-400";
      } else if (task.time === "12:00") {
        timeClasses += "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30";
        dotColor = "bg-cyan-400";
      } else if (task.time === "17:00") {
        timeClasses += "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30";
        dotColor = "bg-emerald-400";
      } else if (task.time === "21:00") {
        timeClasses += "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30";
        dotColor = "bg-indigo-400";
      } else {
        timeClasses += "bg-iron-800 text-iron-300 border border-iron-700";
      }

      timeBadge.className = timeClasses;
      const dot = document.createElement("span");
      dot.className = `w-1.5 h-1.5 rounded-full ${dotColor}`;
      timeBadge.appendChild(dot);
      timeBadge.appendChild(document.createTextNode(task.time));
      titleRow.appendChild(timeBadge);
      bodyCol.appendChild(titleRow);

      // Description
      const descContainer = document.createElement("div");
      descContainer.className = isDone ? "text-iron-400 line-through opacity-80" : "";

      if (lang === "en") {
        const d = document.createElement("div");
        d.className = "text-xs sm:text-sm text-iron-200 leading-relaxed";
        d.textContent = task.desc_en;
        descContainer.appendChild(d);
      } else if (lang === "vi") {
        const d = document.createElement("div");
        d.className = "text-xs sm:text-sm text-iron-200 leading-relaxed";
        d.textContent = task.desc_vi;
        descContainer.appendChild(d);
      } else {
        const dEn = document.createElement("div");
        dEn.className = "text-xs sm:text-sm text-iron-200 leading-relaxed";
        dEn.textContent = task.desc_en;
        descContainer.appendChild(dEn);

        const dVi = document.createElement("div");
        dVi.className = "text-xs text-iron-300 border-t border-iron-800/80 pt-2 mt-2 leading-relaxed";
        const tagVi = document.createElement("span");
        tagVi.className = "text-amber-400 font-semibold";
        tagVi.textContent = "🇻🇳 Tiếng Việt: ";
        dVi.appendChild(tagVi);
        dVi.appendChild(document.createTextNode(task.desc_vi));
        descContainer.appendChild(dVi);
      }
      bodyCol.appendChild(descContainer);

      // Tags list
      let tagsList = [];
      if (lang === "en") tagsList = task.tags_en;
      else if (lang === "vi") tagsList = task.tags_vi;
      else tagsList = Array.from(new Set([...task.tags_en, ...task.tags_vi]));

      const tagsRow = document.createElement("div");
      tagsRow.className = "flex flex-wrap gap-1.5 pt-1";
      tagsList.forEach(tag => {
        const tagSpan = document.createElement("span");
        tagSpan.className = "px-2 py-0.5 rounded text-[11px] bg-iron-950/80 text-iron-300 border border-iron-800 font-mono";
        tagSpan.textContent = tag;
        tagsRow.appendChild(tagSpan);
      });
      bodyCol.appendChild(tagsRow);

      taskEl.appendChild(bodyCol);

      // Checkbox event listener
      checkbox.addEventListener("change", (e) => {
        const checked = e.target.checked;
        state.completed[task.id] = checked;
        if (checked) {
          playCheckSound();
        }
        saveState();
        renderRoadmap();
      });

      tasksContainer.appendChild(taskEl);
    });

    phaseEl.appendChild(tasksContainer);
    container.appendChild(phaseEl);
  });
}

function setupLanguageSwitcher() {
  const btnEn = document.getElementById("langBtnEn");
  const btnVi = document.getElementById("langBtnVi");
  const btnBoth = document.getElementById("langBtnBoth");

  if (btnEn) {
    btnEn.addEventListener("click", () => {
      state.lang = "en";
      saveState();
      updateLanguageUI();
      renderRoadmap();
      showToast("Switched to English!");
    });
  }

  if (btnVi) {
    btnVi.addEventListener("click", () => {
      state.lang = "vi";
      saveState();
      updateLanguageUI();
      renderRoadmap();
      showToast("Đã chuyển sang Tiếng Việt!");
    });
  }

  if (btnBoth) {
    btnBoth.addEventListener("click", () => {
      state.lang = "both";
      saveState();
      updateLanguageUI();
      renderRoadmap();
      showToast("Chế độ Song Ngữ (Bilingual)!");
    });
  }
}

function loadLocalState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      const clean = sanitizeState(parsed);
      if (clean) {
        state.completed = clean.completed;
        state.collapsedPhases = clean.collapsedPhases;
        state.rulesBannerCollapsed = clean.rulesBannerCollapsed;
        state.lang = clean.lang;
        state.audioEnabled = clean.audioEnabled;
      }
    }
  } catch (e) {
    console.warn("Could not load local state from storage:", e);
  }
}

/**
 * Initializes Firebase cloud synchronization dynamically only when
 * __firebase_config is supplied. Avoids unnecessary external network requests.
 */
async function initCloudStorage() {
  if (typeof __firebase_config === 'undefined' || !__firebase_config) return;

  try {
    const firebaseConfig = JSON.parse(__firebase_config);
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js");
    const { getAuth, signInAnonymously, signInWithCustomToken } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js");
    const { getFirestore, doc, setDoc, onSnapshot } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");

    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);

    let credential;
    if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
      credential = await signInWithCustomToken(auth, __initial_auth_token);
    } else {
      credential = await signInAnonymously(auth);
    }

    currentUser = credential.user;
    userId = currentUser.uid;

    const userIdDisplay = document.getElementById("displayUserId");
    if (userIdDisplay) userIdDisplay.textContent = userId;

    const cloudBadge = document.getElementById("cloudStatusBadge");
    if (cloudBadge) cloudBadge.classList.remove("hidden");

    setupFirestoreSync(doc, onSnapshot);
  } catch (err) {
    console.error("Cloud storage initialization error:", err);
  }
}

function setupFirestoreSync(doc, onSnapshot) {
  if (!db || !currentUser || !userId) return;

  const stateDocRef = doc(db, 'artifacts', appId, 'users', userId, 'progress', 'state');
  onSnapshot(stateDocRef, (snap) => {
    if (snap.exists()) {
      const cloudData = snap.data();
      const clean = sanitizeState(cloudData);
      if (clean) {
        state.completed = clean.completed;
        state.collapsedPhases = clean.collapsedPhases;
        state.rulesBannerCollapsed = clean.rulesBannerCollapsed;
        state.lang = clean.lang;
        state.audioEnabled = clean.audioEnabled;

        updateProgressHUD();
        updateLanguageUI();
        renderRoadmap();
      }
    } else {
      saveState();
    }
  }, (err) => {
    console.error("Cloud sync snapshot error:", err);
  });
}

async function saveState() {
  updateProgressHUD();

  const payload = {
    completed: state.completed,
    collapsedPhases: state.collapsedPhases,
    rulesBannerCollapsed: Boolean(state.rulesBannerCollapsed),
    lang: VALID_LANGS.includes(state.lang) ? state.lang : "both",
    audioEnabled: Boolean(state.audioEnabled)
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn("Local storage save error:", e);
  }

  if (!db || !currentUser || !userId) return;

  try {
    const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
    const stateDocRef = doc(db, 'artifacts', appId, 'users', userId, 'progress', 'state');
    await setDoc(stateDocRef, {
      ...payload,
      updatedAt: Date.now()
    }, { merge: true });
  } catch (e) {
    console.error("Cloud save failed:", e);
  }
}

function togglePhaseCollapse(phaseId) {
  state.collapsedPhases[phaseId] = !state.collapsedPhases[phaseId];
  saveState();
  renderRoadmap();
}

function updateProgressHUD() {
  let totalTasks = 0;
  let completedTasks = 0;

  ROADMAP_DATA.forEach(phase => {
    phase.tasks.forEach(task => {
      totalTasks++;
      if (state.completed[task.id]) completedTasks++;
    });
  });

  const pct = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  // Desktop
  const headerText = document.getElementById("headerProgressText");
  const headerBar = document.getElementById("headerProgressBar");
  if (headerText) headerText.textContent = `${pct}% (${completedTasks}/${totalTasks})`;
  if (headerBar) headerBar.style.width = `${pct}%`;

  // Mobile
  const mobText = document.getElementById("mobileProgressText");
  const mobBar = document.getElementById("mobileProgressBar");
  if (mobText) mobText.textContent = `${pct}% (${completedTasks}/${totalTasks})`;
  if (mobBar) mobBar.style.width = `${pct}%`;
}

function setupTabNavigation() {
  const tabs = [
    { btn: "tabBtnRoadmap", view: "viewRoadmap" },
    { btn: "tabBtnRoutine", view: "viewRoutine" },
    { btn: "tabBtnCalculators", view: "viewCalculators" },
    { btn: "tabBtnRules", view: "viewRules" }
  ];

  tabs.forEach(t => {
    const btnEl = document.getElementById(t.btn);
    if (!btnEl) return;
    btnEl.addEventListener("click", () => {
      tabs.forEach(item => {
        const b = document.getElementById(item.btn);
        const v = document.getElementById(item.view);
        if (!b || !v) return;
        if (item.btn === t.btn) {
          b.className = "tab-btn px-4 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-iron-950 font-bold shadow-md shadow-amber-500/20 border border-amber-400/50";
          v.classList.remove("hidden");
        } else {
          b.className = "tab-btn px-4 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 text-iron-300 hover:text-iron-100 hover:bg-iron-850/80 border border-transparent";
          v.classList.add("hidden");
        }
      });

      const controlBar = document.getElementById("roadmapControlBar");
      if (controlBar) {
        controlBar.style.display = t.btn === "tabBtnRoadmap" ? "flex" : "none";
      }
    });
  });
}

function setupInteractions() {
  // Search input (sanitized length)
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = (e.target.value || "").slice(0, 100);
      renderRoadmap();
    });
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.className = "filter-btn text-xs px-3 py-1.5 rounded-lg font-medium bg-iron-900 hover:bg-iron-850 text-iron-300 border border-iron-800 hover:border-iron-700 transition";
      });
      btn.className = "filter-btn text-xs px-3 py-1.5 rounded-lg font-semibold bg-iron-800 text-amber-300 border border-amber-500/60 shadow-sm transition";
      const f = btn.dataset.filter;
      state.activeFilter = VALID_FILTERS.includes(f) ? f : "all";
      renderRoadmap();
    });
  });

  // Expand / Collapse all
  const expandBtn = document.getElementById("expandAllBtn");
  if (expandBtn) {
    expandBtn.addEventListener("click", () => {
      ROADMAP_DATA.forEach(p => state.collapsedPhases[p.id] = false);
      saveState();
      renderRoadmap();
    });
  }

  const collapseBtn = document.getElementById("collapseAllBtn");
  if (collapseBtn) {
    collapseBtn.addEventListener("click", () => {
      ROADMAP_DATA.forEach(p => state.collapsedPhases[p.id] = true);
      saveState();
      renderRoadmap();
    });
  }

  // Audio Toggle
  const toggleAudioBtn = document.getElementById("toggleAudioBtn");
  const soundIconOn = document.getElementById("soundIconOn");
  const soundIconOff = document.getElementById("soundIconOff");

  function updateSoundUI() {
    if (!toggleAudioBtn || !soundIconOn || !soundIconOff) return;
    if (state.audioEnabled) {
      soundIconOn.classList.remove("hidden");
      soundIconOff.classList.add("hidden");
      toggleAudioBtn.classList.add("text-amber-400");
    } else {
      soundIconOn.classList.add("hidden");
      soundIconOff.classList.remove("hidden");
      toggleAudioBtn.classList.remove("text-amber-400");
    }
  }

  if (toggleAudioBtn) {
    toggleAudioBtn.addEventListener("click", () => {
      state.audioEnabled = !state.audioEnabled;
      updateSoundUI();
      saveState();
      showToast(state.audioEnabled ? "Đã bật âm thanh hiệu ứng" : "Đã tắt âm thanh");
    });
  }
  updateSoundUI();

  // Reset Modal Logic
  const resetModal = document.getElementById("resetModal");
  const resetModalBtn = document.getElementById("resetModalBtn");
  const cancelResetBtn = document.getElementById("cancelResetBtn");
  const confirmResetBtn = document.getElementById("confirmResetBtn");

  if (resetModalBtn && resetModal) {
    resetModalBtn.addEventListener("click", () => {
      resetModal.classList.remove("hidden");
      resetModal.classList.add("flex");
    });
  }
  if (cancelResetBtn && resetModal) {
    cancelResetBtn.addEventListener("click", () => {
      resetModal.classList.add("hidden");
      resetModal.classList.remove("flex");
    });
  }
  if (confirmResetBtn && resetModal) {
    confirmResetBtn.addEventListener("click", () => {
      state.completed = {};
      saveState();
      renderRoadmap();
      resetModal.classList.add("hidden");
      resetModal.classList.remove("flex");
      showToast("Đã thiết lập lại toàn bộ tiến độ!", "success");
    });
  }

  // Backup Modal Logic (JSON Export & Sanitized Import)
  const backupModal = document.getElementById("backupModal");
  const openBackupBtn = document.getElementById("openBackupBtn");
  const closeBackupBtn = document.getElementById("closeBackupBtn");
  const backupTextarea = document.getElementById("backupTextarea");
  const copyBackupBtn = document.getElementById("copyBackupBtn");
  const importBackupBtn = document.getElementById("importBackupBtn");

  if (openBackupBtn && backupModal && backupTextarea) {
    openBackupBtn.addEventListener("click", () => {
      const exportData = {
        completed: state.completed,
        collapsedPhases: state.collapsedPhases,
        rulesBannerCollapsed: state.rulesBannerCollapsed,
        lang: state.lang,
        audioEnabled: state.audioEnabled
      };
      backupTextarea.value = JSON.stringify(exportData, null, 2);
      backupModal.classList.remove("hidden");
      backupModal.classList.add("flex");
    });
  }
  if (closeBackupBtn && backupModal) {
    closeBackupBtn.addEventListener("click", () => {
      backupModal.classList.add("hidden");
      backupModal.classList.remove("flex");
    });
  }

  if (copyBackupBtn && backupTextarea) {
    copyBackupBtn.addEventListener("click", async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(backupTextarea.value);
        } else {
          backupTextarea.select();
          document.execCommand("copy");
        }
        showToast("Đã sao chép dữ liệu JSON vào bộ nhớ tạm!");
      } catch (err) {
        backupTextarea.select();
        showToast("Vui lòng bôi đen và sao chép thủ công", "error");
      }
    });
  }

  if (importBackupBtn && backupTextarea && backupModal) {
    importBackupBtn.addEventListener("click", () => {
      try {
        const parsed = JSON.parse(backupTextarea.value);
        const clean = sanitizeState(parsed);
        if (!clean) {
          throw new Error("Invalid schema");
        }
        state.completed = clean.completed;
        state.collapsedPhases = clean.collapsedPhases;
        state.rulesBannerCollapsed = clean.rulesBannerCollapsed;
        state.lang = clean.lang;
        state.audioEnabled = clean.audioEnabled;

        saveState();
        updateLanguageUI();
        renderRoadmap();
        backupModal.classList.add("hidden");
        backupModal.classList.remove("flex");
        showToast("Khôi phục tiến độ thành công!");
      } catch (e) {
        showToast("Dữ liệu JSON không hợp lệ, vui lòng kiểm tra lại!", "error");
      }
    });
  }
}

// Bootstrap Application on DOM Ready
window.addEventListener("DOMContentLoaded", () => {
  loadLocalState();
  initCloudStorage();
  updateProgressHUD();
  updateLanguageUI();
  renderRoadmap();
  setupTabNavigation();
  setupInteractions();
  setupLanguageSwitcher();
});
