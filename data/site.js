/* ============================================================================
 *  SITE DATA  —  Edit THIS file to update your website.
 *  ----------------------------------------------------------------------------
 *  Almost everything on the site is generated from the object below.
 *  You normally never have to touch the HTML/CSS/JS — just edit these fields.
 *
 *  Tips:
 *   • To add a paper, copy one { ... } block in `publications` and edit it.
 *   • `media` for a paper can be a .jpg/.png/.gif/.webp image OR a .mp4 video —
 *     the site auto-detects the file type. Put files in assets/papers/.
 *   • Leave a link as "" (empty string) to hide that button.
 *   • Use `selected: true` to show a paper in the "Selected" filter.
 * ==========================================================================*/

window.SITE = {

  /* ----------------------------- PROFILE ----------------------------------*/
  profile: {
    name: "Peiyan Li",
    // name_zh: "李沛言",
    // A single fixed tagline shown under your name (set typewriter:false to keep
    // it static). Provide one string in the array.
    typewriter: false,
    taglines: [
      "Toward generalist robot manipulation for everyday life",
    ],
    title: "Ph.D. Candidate",
    affiliation: "Institute of Automation, Chinese Academy of Sciences",
    affiliationUrl: "https://ia.cas.cn/",
    avatar: "assets/img/my_photo.jpg",
    location: "Haidian, Beijing, China",
    // The intro paragraph(s). Use <a href> and <strong> freely.
    bio: [
      `I am a Ph.D. candidate at the New Laboratory of Pattern Recognition (NLPR),
       Institute of Automation, Chinese Academy of Sciences, advised by Prof.
       <a href="https://ia.cas.cn/rcdw/jcqn/202404/t20240422_7129881.html"
       target="_blank" rel="noopener">Tieniu Tan</a>. I received my B.Eng.
       (2019–2023) from the Artificial Intelligence honors program at Xi'an
       Jiaotong University, established by Prof.
       <a href="https://gr.xjtu.edu.cn/nnzheng/" target="_blank" rel="noopener">Nanning
       Zheng</a>.`,
      `I have been fortunate to be helped by many senior researchers, including
       (in alphabetical order) <a href="https://yanrockhuang.github.io/"
       target="_blank" rel="noopener">Yan Huang</a>,
       <a href="https://www.taokong.org/" target="_blank" rel="noopener">Tao Kong</a>,
       <a href="https://yusufma03.github.io/" target="_blank" rel="noopener">Xiao Ma</a>,
       <a href="https://scholar.google.com/citations?hl=en&user=7u0TYgIAAAAJ"
       target="_blank" rel="noopener">Hongtao Wu</a>, and
       <a href="https://ia.cas.cn/rcdw/jcqn/202404/t20240422_7129880.html"
       target="_blank" rel="noopener">Liang Wang</a>.`,
      `My research approaches general-purpose robot manipulation from three angles —
       <strong>data</strong>, <strong>model architecture</strong>, and
       <strong>training recipe</strong> — aiming to build manipulation policies that
       can be genuinely deployed in human everyday life. Recently I am especially
       focused on <strong>scaling robot foundation model pretraining</strong>.`,
    ],
    // Highlighted "contact me" call-out shown right under the bio. Leave "" to hide.
    contactNote: `If you'd like to discuss research or explore any kind of
      collaboration, I'd love to hear from you!`,
    // Top-right quick links / contact. Leave value "" to hide.
    email: "peiyan.li@cripac.ia.ac.cn",
    cv: "",                                          // TODO: drop a CV in assets/ and put its path here
    googleScholar: "https://scholar.google.com/citations?user=b8z2YcYAAAAJ&hl=en",                               // TODO
    github: "https://github.com/LPY1219",            // TODO: verify
    twitter: "https://x.com/PYL78055244",                                     // TODO  (or "")
    linkedin: "",                                    // TODO  (or "")
    xiaohongshu: "https://www.xiaohongshu.com/user/profile/63632b30000000001f015226?xsec_token=YB6ZwHlNTOpDWlmkoZP0UZITDSo5ORR6P6rdmAjhdxY8c%3D&xsec_source=app_share&shareRedId=ODk4MzVHNzk2NzUyOTgwNjdJOTg5Nzg_&apptime=1781509643&share_id=7d0a4ff6c5df4af4a656ad15aef3761e&share_channel=copy_link&appuid=63632b30000000001f015226&xhsshare=CopyLink",                                 // 小红书 TODO (or "")
    semanticScholar: "",
    orcid: "",
  },

  /* ----- Affiliation logos removed - info now in Education section only --*/
  /* Optional. Leave the array empty [] to hide the strip.                    */
  affiliations: [],

  /* ------------------------------- NEWS -----------------------------------*/
  /* Most recent first. `tag` is an optional emoji/short label.              */
  news: [
    { date: "2026.07", tag: "🎉", html: `We released <a href="https://robotics.xiaomi.com/xiaomi-robotics-1.html" target="_blank" rel="noopener"><strong>Xiaomi-Robotics-1</strong></a>. Feedback welcome!` },
    { date: "2026.07", tag: "🎉", html: `We released <a href="https://flow-wam.github.io/" target="_blank" rel="noopener"><strong>FlowWAM</strong></a>. Feedback welcome!` },
    { date: "2026.06", tag: "🎉", html: `Our <a href="https://27yw.github.io/E-TTS-Web/" target="_blank" rel="noopener"><strong>E-TTS</strong></a> has been accepted by ECCV 2026!` },
    { date: "2026.04", tag: "🎉", html: `We released <a href="https://lpy1219.github.io/MV-VDP-Web/" target="_blank" rel="noopener"><strong>SpatialVAM</strong></a>. Feedback welcome!` },
    { date: "2025.09", tag: "🎉", html: `<a href="https://bridgevla.github.io/" target="_blank" rel="noopener"><strong>BridgeVLA</strong></a> was accepted by <strong>NeurIPS 2025</strong>!` },
  ],

  /* --------------------------- PUBLICATIONS -------------------------------*/
  /* Newest / most important first. Duplicate a block to add a paper.        */
  publications: [
    {
      selected: true,
      media: "assets/papers/paper_xr1.png",
      poster: "",
      title: "Xiaomi-Robotics-1: Scaling Vision-Language-Action Models with over 100K Hours of Real-World Trajectories",
      authors: [ "Core Contributor, alphabetical order"],
      authorsEqual: [],
      authorsCorresponding: [""],
      venue: "Technical Report",
      year: "2026",
      tldr: `Xiaomi-Robotics-1 is a vision-language-action foundation model trained on over 100K hours of real-world trajectories. Through large-scale pre-training and cross-embodiment post-training, it generalizes to unseen environments, improves consistently with scale, and adapts efficiently to new dexterous and long-horizon tasks with limited fine-tuning data.`,
      links: {
        project: "https://robotics.xiaomi.com/xiaomi-robotics-1.html",
        paper: "https://robotics.xiaomi.com/robot-static-resource/xiaomi-robotics-1/xiaomi-robotics-1.pdf",
        bibtex: "",
      },
    },
    {
      selected: true,
      // media: 论文的 teaser 展示图或演示视频，放在 assets/papers/ 目录下。
      //   图片格式：推荐 .jpg / .webp（文件小、质量好），也支持 .png / .gif
      //   视频格式：.mp4 / .webm，会自动静音循环播放（类似 GIF 效果）
      //   不推荐 .svg，论文截图/渲染图用位图格式更合适
      //   建议尺寸：宽约 600px，比例 16:10
      media: "assets/papers/paper_spatialvam.png",
      // poster: 仅当 media 是视频时使用，作为视频加载前的封面预览图。
      //   格式同图片（.jpg / .png）。如果 media 是图片，留空 "" 即可。
      poster: "",
      title: "SpatialVAM: Spatial-Aware Multi-View Video Diffusion as a Data-Efficient Robot Policy",
      authors: ["Peiyan Li", "Yixiang Chen", "Yuan Xu", "Jiabing Yang", "et al."],

      // Mark yourself bold automatically by matching profile.name; mark others:
      authorsEqual: ["Peiyan Li", "Yixiang Chen"],           // names with equal contribution (gets *)
      authorsCorresponding: [], // gets †
      venue: "arxiv",
      year: "2026",
      award: "",   // "" if none
      tldr: `We introduce the first 3D video action model that jointly predicts multi-view RGB frames and heatmaps, bridging video prediction and action recognition in a data-efficient, robust, generalizable, and interpretable manner.`,
      links: {
        project: "https://lpy1219.github.io/MV-VDP-Web/home_page.html",
        paper: "https://arxiv.org/html/2604.03181",
        // arxiv: "#",
        // code: "#",
        // video: "",
        // dataset: "",
        bibtex: "https://scholar.googleusercontent.com/scholar.bib?q=info:ljZLSnplU2EJ:scholar.google.com/&output=citation&scisdr=CtTN8bvrENLokvo2o5k:ANDmEU4AAAAAajAwu5nYkPJ5Bu9MIFpcEXC_Bbs&scisig=ANDmEU4AAAAAajAwu9I4jYeyloui8dOz7IegYVI&scisf=4&ct=citation&cd=-1&hl=zh-CN",
      },
    },
    {
      selected: true,
      media: "assets/papers/paper_bridgevla.png",
      poster: "",
      title: "BridgeVLA: Input-Output Alignment for Efficient 3D Manipulation Learning with Vision-Language Models",
      authors: [ "Peiyan Li", "Yixiang Chen", "Hongtao Wu", "Xiao Ma", "Xiangnan Wu", "Yan Huang", "Liang Wang", "Tao Kong", "Tieniu Tan"],
      authorsEqual: [],
      authorsCorresponding: [""],
      venue: "NeurIPS",
      year: "2025",
      award: ["COLOSSEUM Challenge Champion @ CVPR 2025 GRAIL Workshop" , "ARNOLD Challenge Champion @ CVPR 2026 EAI Workshop"],
      tldr: `We propose a 3D VLA framework that aligns the input and output within a shared 2D space in both pre-training and fine-tuning, 
      enabling strong data efficiency and achieving impressive performance in both basic and generalization settings.`,
      links: {
        project: "https://bridgevla.github.io/",
        paper: "https://arxiv.org/abs/2506.07961",
        code: "https://github.com/BridgeVLA/BridgeVLA",
        // video: "https://www.youtube.com/watch?v=kG1MVh9eP78",
        dataset: "https://huggingface.co/datasets/LPY/BridgeVLA/tree/main",
        bibtex: "https://scholar.googleusercontent.com/scholar.bib?q=info:aO-F5vwUiSEJ:scholar.google.com/&output=citation&scisdr=CtTN8bvrENLokvozuCs:ANDmEU4AAAAAajA1oCumV3OfDKNpWwHuHHnxsZo&scisig=ANDmEU4AAAAAajA1oFMoZ_uWCc80Wr-qv2ZOGJU&scisf=4&ct=citation&cd=-1&hl=zh-CN",
      },
    },
    {
      selected: true,
      media: "assets/papers/paper_grmg.png",
      poster: "",
      title: "GR-MG: Leveraging Partially-Annotated Data via Multi-Modal Goal-Conditioned Policy",
      authors: ["Peiyan Li","Hongtao Wu","Yan Huang","Chilam Cheang","Liang Wang","Tao Kong"],
      authorsEqual: [],
      // authorsCorresponding: ["Senior Author"],
      venue: "IEEE Robotics and Automation Letter (RA-L)",
      year: "2025",
      award: "",
      tldr: `GR-MG leverages partially-annotated data (videos without action labels and trajectories without text)
       by conditioning on both text instructions and goal images. At inference, it generates goal images via a diffusion-based model, enabling flexible language-specified manipulation across 58 real-world tasks with significant success rate improvements.`,
      links: {
        project: "https://gr-mg.github.io/",
        paper: "https://arxiv.org/abs/2408.14368",
        code: "https://github.com/bytedance/GR-MG/tree/main",
        bibtex: "https://scholar.googleusercontent.com/scholar.bib?q=info:8vg8rIOFI7cJ:scholar.google.com/&output=citation&scisdr=CtTN8bvrENLokvo6-SU:ANDmEU4AAAAAajA84SVp9cvjOSUhFNZJh5bovuc&scisig=ANDmEU4AAAAAajA84QacI505gsj2xXAJQ0XiyUM&scisf=4&ct=citation&cd=-1&hl=zh-CN",
      },
    },
    {
      selected: true,
      media: "assets/papers/paper_etts.png",
      poster: "",
      title: "E-TTS: A New Embodied Test-Time Scaling Framework for Robotic Manipulation",
      authors: ["Wen Ye", "Peiyan Li","Tingyu Yuan","Yuan Xu","Xiangnan Wu",
        "Chaoyang Zhao","Jing Liu","Nianfeng Liu","Yan Huang", "Liang Wang"],
      authorsEqual: ["Wen Ye", "Peiyan Li"],
      // authorsCorresponding: ["Senior Author"],
      venue: "ECCV",
      year: "2026",
      award: "",
      tldr: `E-TTS is a plug-and-play embodied test-time scaling framework that jointly scales reasoning and action with history-aware verification and closed-loop feedback, improving multiple VLA base models across multiple robotic benchmarks without retraining.`,
      links: {
        project: "https://27yw.github.io/E-TTS-Web/",
        paper: "https://arxiv.org/abs/2606.27268",
        // code: "https://github.com/bytedance/GR-MG/tree/main",
        bibtex: "https://27yw.github.io/E-TTS-Web/",
      },
    },
    {
      selected: true,
      media: "assets/papers/paper_flowwam.png",
      poster: "",
      title: "FlowWAM: Optical Flow as a Unified Action Representation for World Action Models",
      authors: ["Yixiang Chen", "Peiyan Li","Yuan Xu","Qisen Ma","Jiabing Yang",
        "Kai Wang","Jianhua Yang","Dong An","He Guan","Goteng Liu","Jianlou Si","Jun Huang","Jing Liu","Nianfeng Liu","Yan Huang", "Liang Wang"],
      authorsEqual: ["Yixiang Chen", "Peiyan Li"],
      // authorsCorresponding: ["Senior Author"],
      venue: "arxiv",
      year: "2026",
      award: "",
      tldr: `World Action Models repurpose pretrained video generators for control, but a modality gap remains: action signals must align with visual priors while retaining dense motion cues. FlowWAM bridges this gap with optical flow—a video-native, spatially grounded action representation extractable from unlabeled video. Its shared dual-stream diffusion model predicts flow, conditions world modeling on flow, and pretrains at scale on unlabeled video`,
      links: {
        project: "https://flow-wam.github.io/",
        paper: "https://arxiv.org/pdf/2607.13017",
        // code: "https://github.com/bytedance/GR-MG/tree/main",
        bibtex: "",
      },
    },
    {
      selected: true,
      media: "assets/papers/paper_robovlms.png",
      poster: "",
      title: "What Matters in Building Vision-Language-Action Models for Generalist Robots",
      authors: ["Xinghang Li","Peiyan Li","Long Qian","Minghuan Liu","Dong Wang","Jirong Liu","Bingyi Kang","Xiao Ma","Xinlong Wang","Di Guo","Tao Kong","Hanbo Zhang","Huaping Liu"],
      authorsEqual: [],
      // authorsCorresponding: ["Senior Author"],
      venue: "Nature Machine Intelligence",
      year: "2025",
      award: "",
      tldr: `We provide a comprehensive empirical study on key VLA design choices and a unified, flexible framework that enables easy integration of any VLM within 30 lines of code.`,
      links: {
        project: "https://robovlms.github.io/",
        paper: "https://arxiv.org/abs/2412.14058",
        code: "https://github.com/Robot-VLAs/RoboVLMs",
        dataset: "https://huggingface.co/datasets/robovlms/bytedance_robot_benchmark_20",
        bibtex: "https://scholar.googleusercontent.com/scholar.bib?q=info:S7ciTlku4NsJ:scholar.google.com/&output=citation&scisdr=CtTN8bvrENLokvo81ZU:ANDmEU4AAAAAajA6zZVdWcE8c7aHSQ-221abUlc&scisig=ANDmEU4AAAAAajA6zTn3GRJc7Ye_2k5tQkiKGMk&scisf=4&ct=citation&cd=-1&hl=zh-CN",
      },
    },
    {
      selected: true,
      media: "assets/papers/paper_ecflow.png",
      poster: "",
      title: "Enabling Versatile Robotic Manipulation from Action-Unlabeled Videos via Embodiment-Centric Flow",
      authors: ["Yixiang Chen","Peiyan Li","Yan Huang","Jiabing Yang","Kehan Chen","Liang Wang"],
      authorsEqual: [],
      // authorsCorresponding: ["Senior Author"],
      venue: "ICCV",
      year: "2025",
      award: "",
      tldr: `We propose a method for learning robotic manipulation policies solely from action-unlabeled videos, enabling versatile manipulation over deformable objects, occluded environments, and non-object-displacement tasks.`,
      links: {
        project: "https://ec-flow1.github.io/",
        paper: "https://arxiv.org/pdf/2507.06224",
        code: "https://github.com/YixiangChen515/EC-Flow",
        bibtex: "https://scholar.googleusercontent.com/scholar.bib?q=info:9ghNzxv1qgoJ:scholar.google.com/&output=citation&scisdr=CtTN8bvrENLokvo7gQE:ANDmEU4AAAAAajA9mQHF8wZrPOcXQjeHHJTidAQ&scisig=ANDmEU4AAAAAajA9mVSYWGDxP96wa_E1MDreg1U&scisf=4&ct=citation&cd=-1&hl=zh-CN",
      },
    },
  ],

  /* ------------------------------ EDUCATION -------------------------------*/
  education: [
    { period: "2023 — Now",  degree: "Ph.D. in Embodied AI", org: "Institute of Automation, Chinese Academy of Sciences", logo: "assets/img/logo-casia.png" },
    { period: "2019 — 2023", degree: "B.Eng. in Artificial Intelligence", org: "Xi'an Jiaotong University", logo: "assets/img/logo-xjtu.svg" },
  ],

  /* ----------------------------- EXPERIENCE -------------------------------*/
  experience: [
    { period: "2026.01-now", role: "Top Internship Talent Program", org: "Xiaomi Robotics", logo: "assets/img/logo-xiaomi.png", note: "Working on robot foundation models" },
    { period: "2024.01-2025.08", role: "Research Intern", org: "Bytedance Seed Robotics", logo: "assets/img/logo-bytedance_seed.png", note: "Worked on robot manipulation and vision-language-action models" },
    { period: "2023.02-2023.09", role: "Research Intern", org: "Tencent Robotics X", logo: "assets/img/logo-tencent_rx.png", note: "Worked on language-conditioned motion planning" },
  ],

  /* ------------------------------- AWARDS ---------------------------------*/
  awards: [
    { year: "2026", text: "ARNOLD Challenge Champion @ CVPR 2026 EAI Workshop"},
    { year: "2026", text: "ICML Gold Reviewer"},
    { year: "2025", text: "COLOSSEUM Challenge Champion @ CVPR 2025 GRAIL Workshop"},
    { year: "2024", text: "Outstanding student at UCAS" },
    { year: "2023", text: "Champion of the Campus Hosting Competition at UCAS" },
    { year: "2023", text: "Outstanding National Scholarship Student Representatives Selected by People's Daily (the sole undergraduate selectee at XJTU that year)" },
    { year: "2021", text: "Megvii Technology Comprehensive Development Scholarship (The highest honor in the department)" },
  ],

  /* -------------------------------- TALKS ---------------------------------*/
  /* date: 日期，text: 一句话介绍，video: 视频链接（留 "" 则不显示）        */
  talks: [
    { date: "2025.07", text: "Invited talk at 3DCVer", video: "https://www.bilibili.com/video/BV1pt81zdEe7/?t=0.0"},
    { date: "2025.07", text: "Invited talk at Lumina", video: "https://www.bilibili.com/video/BV1fbMXzQE9r/"},
    { date: "2025.06", text: "Invited talk at RoboTech", video: "https://www.bilibili.com/video/BV1mLhbz9Ev1/?spm_id_from=333.337.search-card.all.click"},
  ],

  /* ------------------------------ SERVICES --------------------------------*/
  services: [
    "Reviewer: NeurIPS, ICML, CVPR, ECCV",
  ],

  /* -------------------------------- MISC ----------------------------------*/
  // Optional personal touch. Leave "" to hide the whole section.
  misc: `Outside research, I enjoy running, hiking, and various sports. I have traveled to many cities for marathons — Xi'an, Shenzhen, Tianjin, Zhengzhou, and Lanzhou. The miles are always hard, but crossing the finish line makes every step worth it.`,

  // footerNote: "Last updated June 2026",
};
