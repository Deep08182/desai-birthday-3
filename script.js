/**
 * ==========================================================================
 * PUNE ↔ DEHRADUN SURPRISE EXPERIENCE • JAVASCRIPT ENGINE
 * ==========================================================================
 * Fully modular, highly responsive, smooth animations, audio synthesizer,
 * canvas particle system, and centralized easy-to-swap photo configuration.
 */

/* ==========================================================================
   PHOTO CONFIGURATION (Add, remove, or swap photos & captions here!)
   ========================================================================== */
const IMAGE_BASE = "./images/";

const PHOTO_CONFIG = [
    {
        image: `${IMAGE_BASE}photo1.jpg`,
        caption: "this one deserves a moment.",
        alt: "Memory snapshot 01"
    },
    {
        image: `${IMAGE_BASE}photo2.jpg`,
        caption: "okay, this picture >>>",
        alt: "Memory snapshot 02"
    },
    {
        image: `${IMAGE_BASE}photo3.jpg`,
        caption: "one of my favourites.",
        alt: "Memory snapshot 03"
    },
    {
        image: `${IMAGE_BASE}photo4.jpg`,
        caption: "you actually look good here 😭",
        alt: "Memory snapshot 04"
    },
    {
        image: `${IMAGE_BASE}photo5.jpg`,
        caption: "saving this one forever.",
        alt: "Memory snapshot 05"
    },
    {
        image: `${IMAGE_BASE}photo6.jpg`,
        caption: "unfiltered golden hour energy ✨",
        alt: "Memory snapshot 06"
    },
    {
        image: `${IMAGE_BASE}photo7.jpg`,
        caption: "the chaos in this frame is unmatched 😂",
        alt: "Memory snapshot 07"
    },
    {
        image: `${IMAGE_BASE}photo8.jpg`,
        caption: "just pure good vibes.",
        alt: "Memory snapshot 08"
    },
    {
        image: `${IMAGE_BASE}photo9.jpg`,
        caption: "that genuine smile though 🌻",
        alt: "Memory snapshot 09"
    },
    {
        image: `${IMAGE_BASE}photo10.jpg`,
        caption: "documenting the moments that matter.",
        alt: "Memory snapshot 10"
    },
    {
        image: `${IMAGE_BASE}photo11.jpg`,
        caption: "proof that distance doesn't dim good memories.",
        alt: "Memory snapshot 11"
    },
    {
        image: `${IMAGE_BASE}photo12.jpg`,
        caption: "soft aesthetic frame ☁️",
        alt: "Memory snapshot 12"
    },
    {
        image: `${IMAGE_BASE}photo13.jpg`,
        caption: "definitely keeping this in the vault.",
        alt: "Memory snapshot 13"
    },
    {
        image: `${IMAGE_BASE}photo14.jpg`,
        caption: "radiating warmth from miles away.",
        alt: "Memory snapshot 14"
    },
    {
        image: `${IMAGE_BASE}photo15.jpg`,
        caption: "a 10/10 candid moment.",
        alt: "Memory snapshot 15"
    },
    {
        image: `${IMAGE_BASE}photo16.jpg`,
        caption: "another chapter of the good days.",
        alt: "Memory snapshot 16"
    },
    {
        image: `${IMAGE_BASE}photo17.jpg`,
        caption: "always laughing about something.",
        alt: "Memory snapshot 17"
    },
    {
        image: `${IMAGE_BASE}photo18.jpg`,
        caption: "classic frame. no notes.",
        alt: "Memory snapshot 18"
    },
    {
        image: `${IMAGE_BASE}photo19.jpg`,
        caption: "captured and remembered forever.",
        alt: "Memory snapshot 19"
    },
    {
        image: `${IMAGE_BASE}photo20.jpg`,
        caption: "forever grateful for this one.",
        alt: "Memory snapshot 20"
    },
    {
        image: `${IMAGE_BASE}photo21.jpg`,
        caption: "sunshine personified ☀️",
        alt: "Memory snapshot 21"
    },
    {
        image: `${IMAGE_BASE}photo22.jpg`,
        caption: "and many more memories waiting to be made.",
        alt: "Memory snapshot 22"
    }
];

// Mystery Photo configuration for Section 10 Reveal
const REVEAL_PHOTO_CONFIG = {
    image: `${IMAGE_BASE}photo4.jpg`,
    caption: "“Saving this one forever. Some smiles are just meant to be kept safe.”"
};

/* ==========================================================================
   APP INITIALIZATION (Resilient multi-stage boot)
   ========================================================================== */
function initApp() {
    const modules = [
        ["Ambient Particles", initAmbientParticles],
        ["Cursor Glow", initCursorGlow],
        ["Audio System", initAudioSystem],
        ["Intro Sequence", initIntroSequence],
        ["Flight Path", initFlightPathAnimation],
        ["Slideshow", initSlideshow],
        ["Polaroid Wall", initPolaroidWall],
        ["Reveal Cards", initRevealCards],
        ["Interactive Heart", initInteractiveHeart],
        ["Sunflower", initSunflowerSection],
        ["Timeline", initTimelineObserver],
        ["Vibe Game", initVibeGame],
        ["Photo Reveal", initPhotoReveal],
        ["Finale", initFinaleObserver],
        ["Photo Modal", initPhotoModal]
    ];

    modules.forEach(([name, fn]) => {
        try {
            fn();
        } catch (err) {
            console.error(`[App] Error initializing ${name}:`, err);
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    // If deferred or already interactive, execute immediately
    initApp();
}

/* ==========================================================================
   1. AMBIENT PARTICLES (FLOATING CANVAS STARS & SPARKLES)
   ========================================================================== */
function initAmbientParticles() {
    const canvas = document.getElementById("ambient-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor(width / 24), 50);

    const colors = [
        "rgba(255, 183, 161, 0.45)",  // peach
        "rgba(255, 214, 224, 0.45)",  // blush
        "rgba(254, 228, 136, 0.45)",  // warm yellow
        "rgba(232, 222, 252, 0.45)"   // lavender
    ];

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2.2 + 0.8,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 0.4,
            vy: -Math.random() * 0.5 - 0.15,
            pulse: Math.random() * Math.PI,
            pulseSpeed: 0.02 + Math.random() * 0.02
        });
    }

    function render() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.pulse += p.pulseSpeed;

            if (p.y < -10) {
                p.y = height + 10;
                p.x = Math.random() * width;
            }
            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;

            const scale = 1 + Math.sin(p.pulse) * 0.35;
            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(0.5, p.radius * scale), 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });

        requestAnimationFrame(render);
    }
    render();
}

/* ==========================================================================
   2. DESKTOP CURSOR GLOW
   ========================================================================== */
function initCursorGlow() {
    const glow = document.getElementById("cursor-glow");
    if (!glow || window.innerWidth < 900) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener("pointermove", (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function update() {
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;
        glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        requestAnimationFrame(update);
    }
    update();
}

/* ==========================================================================
   3. PROCEDURAL SOOTHING AUDIO SYNTHESIZER & EQUALIZER
   ========================================================================== */
function initAudioSystem() {
    const btn = document.getElementById("audio-toggle-btn");
    if (!btn) return;

    let isPlaying = false;
    let audioCtx = null;
    let synthTimer = null;
    let htmlAudio = null;

    // Check if user has an actual audio file './music.mp3' in the directory
    try {
        fetch('./music.mp3', { method: 'HEAD' })
            .then(res => {
                if (res.ok) {
                    htmlAudio = new Audio('./music.mp3');
                    htmlAudio.loop = true;
                    htmlAudio.volume = 0.35;
                }
            })
            .catch(() => {});
    } catch (e) {}

    // Soothing Lofi Pentatonic Chords Generator (C Major 9 / Fmaj7 dreamy tones)
    const scale = [
        261.63, // C4
        293.66, // D4
        329.63, // E4
        392.00, // G4
        440.00, // A4
        523.25, // C5
        587.33, // D5
        659.25  // E5
    ];

    function playSoothingNote() {
        if (!isPlaying || !audioCtx) return;
        const now = audioCtx.currentTime;

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        // Warm sine wave with subtle triangle warmth
        osc.type = Math.random() > 0.4 ? 'sine' : 'triangle';
        const note = scale[Math.floor(Math.random() * scale.length)];
        osc.frequency.setValueAtTime(note, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.05 + Math.random() * 0.04, now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + 3.0);

        // Schedule next gentle note (peaceful 60-70 bpm rhythm)
        const nextDelay = 800 + Math.random() * 1200;
        synthTimer = setTimeout(playSoothingNote, nextDelay);
    }

    function startMusic() {
        isPlaying = true;
        btn.classList.add("playing");
        btn.setAttribute("title", "Pause soothing melody");

        if (htmlAudio) {
            htmlAudio.play().catch(() => {});
        } else {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            playSoothingNote();
        }
    }

    function pauseMusic() {
        isPlaying = false;
        btn.classList.remove("playing");
        btn.setAttribute("title", "Play soothing background melody");

        if (htmlAudio) {
            htmlAudio.pause();
        } else {
            if (synthTimer) clearTimeout(synthTimer);
        }
    }

    btn.addEventListener("click", () => {
        if (isPlaying) {
            pauseMusic();
        } else {
            startMusic();
        }
    });
}

/* ==========================================================================
   4. INTRO / LANDING SCREEN CINEMATIC SEQUENCE
   ========================================================================== */
function initIntroSequence() {
    const line1 = document.getElementById("intro-line-1");
    const line2 = document.getElementById("intro-line-2");
    const line3 = document.getElementById("intro-line-3");
    const openBtn = document.getElementById("open-surprise-btn");
    const ripple = document.getElementById("transition-ripple");

    // Sequence the text transitions
    setTimeout(() => {
        if (line1) {
            line1.style.opacity = '0';
            line1.style.transform = 'translateY(-10px)';
        }
        setTimeout(() => {
            if (line1) line1.style.display = 'none';
            if (line2) line2.classList.add("active");
        }, 600);
    }, 1800);

    setTimeout(() => {
        if (line3) line3.classList.add("active");
    }, 3200);

    // Open Surprise Button Click
    if (openBtn) {
        openBtn.addEventListener("click", () => {
            // Button bounce
            openBtn.style.transform = "scale(0.95)";
            setTimeout(() => {
                openBtn.style.transform = "scale(1.08)";
            }, 150);

            // Screen ripple transition
            if (ripple) {
                ripple.classList.add("active");
                setTimeout(() => {
                    ripple.classList.remove("active");
                }, 1100);
            }

            // Burst petals & hearts across the screen
            spawnPetalBurst();

            // Smooth scroll into Section 1
            setTimeout(() => {
                const target = document.getElementById("section-distance");
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }, 450);
        });
    }
}

function spawnPetalBurst() {
    const items = ["🌻", "🌸", "✨", "❤️", "💛", "♡"];
    for (let i = 0; i < 35; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.innerText = items[Math.floor(Math.random() * items.length)];
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.top = `${window.scrollY + Math.random() * 40}px`;
        piece.style.fontSize = `${1.2 + Math.random() * 1.4}rem`;

        const xEnd = (Math.random() - 0.5) * 350;
        const yEnd = 250 + Math.random() * 450;
        const rotEnd = (Math.random() - 0.5) * 720;

        piece.style.setProperty("--x-end", `${xEnd}px`);
        piece.style.setProperty("--y-end", `${yEnd}px`);
        piece.style.setProperty("--rot-end", `${rotEnd}deg`);

        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 3200);
    }
}

/* ==========================================================================
   5. SECTION 1 — DISTANCE FLIGHT PATH ANIMATION
   ========================================================================== */
function initFlightPathAnimation() {
    const flightPath = document.getElementById("flight-path");
    const paperPlane = document.getElementById("paper-plane");
    if (!flightPath || !paperPlane || typeof flightPath.getTotalLength !== 'function') return;

    try {
        let pathLength = flightPath.getTotalLength();
        if (!pathLength) return;
        let progress = 0;

        function moveAirplane() {
            try {
                progress = (progress + 0.0035) % 1;
                const point = flightPath.getPointAtLength(progress * pathLength);
                const nextPoint = flightPath.getPointAtLength(Math.min((progress + 0.01) * pathLength, pathLength));

                const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);

                paperPlane.style.left = `${point.x}px`;
                paperPlane.style.top = `${point.y}px`;
                paperPlane.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

                requestAnimationFrame(moveAirplane);
            } catch (err) {}
        }
        requestAnimationFrame(moveAirplane);
    } catch (err) {
        console.warn("[App] Flight path animation initialization skipped:", err);
    }
}

/* ==========================================================================
   6. SECTION 2 — PHOTO MEMORY SLIDESHOW
   ========================================================================== */
function initSlideshow() {
    const track = document.getElementById("slides-track");
    const dotsContainer = document.getElementById("slide-progress-dots");
    const captionEl = document.getElementById("active-slide-caption");
    const prevBtn = document.getElementById("slide-prev-btn");
    const nextBtn = document.getElementById("slide-next-btn");
    const container = document.getElementById("slideshow-container");

    if (!track || !PHOTO_CONFIG.length) return;

    // Pick top 10 photos for the prime highlight reel
    const highlightPhotos = PHOTO_CONFIG.slice(0, 10);
    let currentIndex = 0;
    let autoPlayTimer = null;
    let isPaused = false;

    // Render slide items and progress dots
    track.innerHTML = "";
    dotsContainer.innerHTML = "";

    highlightPhotos.forEach((item, idx) => {
        const slide = document.createElement("div");
        slide.className = `slide-item ${idx === 0 ? "active" : ""}`;

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.alt;
        img.className = "slide-img";
        img.loading = "lazy";
        img.onerror = () => {
            console.error("Failed to load slideshow image:", item.image);
            slide.style.opacity = "0.3";
        };
        slide.appendChild(img);
        track.appendChild(slide);

        const dot = document.createElement("button");
        dot.className = `progress-dot ${idx === 0 ? "active" : ""}`;
        dot.setAttribute("aria-label", `Slide ${idx + 1}`);
        dot.addEventListener("click", () => goToSlide(idx));
        dotsContainer.appendChild(dot);
    });

    const slides = track.querySelectorAll(".slide-item");
    const dots = dotsContainer.querySelectorAll(".progress-dot");

    function updateSlide() {
        slides.forEach((s, idx) => {
            s.classList.toggle("active", idx === currentIndex);
        });
        dots.forEach((d, idx) => {
            d.classList.toggle("active", idx === currentIndex);
        });

        if (captionEl) {
            captionEl.style.opacity = "0";
            setTimeout(() => {
                captionEl.textContent = `“${highlightPhotos[currentIndex].caption}”`;
                captionEl.style.opacity = "1";
            }, 250);
        }
    }

    function goToSlide(idx) {
        currentIndex = (idx + highlightPhotos.length) % highlightPhotos.length;
        updateSlide();
        resetTimer();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    // Auto-play timer
    function startTimer() {
        if (autoPlayTimer) clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(() => {
            if (!isPaused) nextSlide();
        }, 5000);
    }

    function resetTimer() {
        startTimer();
    }

    if (container) {
        container.addEventListener("mouseenter", () => { isPaused = true; });
        container.addEventListener("mouseleave", () => { isPaused = false; });
        container.addEventListener("touchstart", () => { isPaused = true; }, { passive: true });
        container.addEventListener("touchend", () => { isPaused = false; }, { passive: true });
    }

    startTimer();
}

/* ==========================================================================
   7. SECTION 3 — THE MEMORY WALL (POLAROID COLLAGE)
   ========================================================================== */
function initPolaroidWall() {
    const grid = document.getElementById("polaroid-grid");
    if (!grid) return;

    grid.innerHTML = "";

    PHOTO_CONFIG.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "polaroid-card";

        // Random subtle tilt between -3.5 and +3.5 deg
        const tilt = (Math.random() * 7 - 3.5).toFixed(1);
        card.style.setProperty("--tilt-angle", `${tilt}deg`);

        const imgBox = document.createElement("div");
        imgBox.className = "polaroid-img-box";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.alt;
        img.className = "polaroid-img";
        img.loading = "lazy";
        img.onerror = () => {
            console.error("Failed to load polaroid image:", item.image);
            card.style.opacity = "0.5";
        };

        const badge = document.createElement("div");
        badge.className = "polaroid-heart-badge";
        badge.textContent = "♡";

        imgBox.appendChild(img);
        imgBox.appendChild(badge);

        const caption = document.createElement("p");
        caption.className = "polaroid-caption";
        caption.textContent = item.caption;

        card.appendChild(imgBox);
        card.appendChild(caption);

        // Click opens lightbox
        card.addEventListener("click", () => {
            openPhotoModal(item.image, item.caption);
        });

        grid.appendChild(card);
    });
}

/* ==========================================================================
   8. SECTION 4 — “THINGS THAT MAKE YOU…” CARD REVEALS
   ========================================================================== */
function initRevealCards() {
    const cards = document.querySelectorAll(".reveal-card");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });
}

/* ==========================================================================
   9. SECTION 5 — INTERACTIVE HEART EFFECT
   ========================================================================== */
function initInteractiveHeart() {
    const btn = document.getElementById("magic-heart-btn");
    const msg = document.getElementById("heart-message");
    const counterEl = document.getElementById("tap-count");
    if (!btn || !msg) return;

    let tapCount = 0;
    const messages = [
        "“See? A little happiness can travel pretty far. ❤️”",
        "“Sending warm vibes across 1,400 km ✨”",
        "“Distance has nothing on good memories 🌻”",
        "“Hope this put a little smile on your face 😊”",
        "“A tiny burst of sunshine for your day ☀️”",
        "“Zero miles can change how genuine this is 💛”",
        "“Still glad our paths crossed, honestly.”"
    ];

    btn.addEventListener("click", (e) => {
        tapCount++;
        if (counterEl) counterEl.textContent = tapCount;

        // Button bump animation
        btn.style.transform = "scale(0.88)";
        setTimeout(() => {
            btn.style.transform = "scale(1.15)";
            setTimeout(() => btn.style.transform = "scale(1)", 200);
        }, 120);

        // Update message randomly
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        msg.style.opacity = "0";
        msg.style.transform = "translateY(8px)";
        setTimeout(() => {
            msg.textContent = randomMsg;
            msg.style.opacity = "1";
            msg.style.transform = "translateY(0)";
        }, 220);

        // Launch explosion of floating hearts
        const rect = btn.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;

        const heartIcons = ["❤️", "💖", "🌸", "✨", "💕", "💛", "♡"];
        for (let i = 0; i < 24; i++) {
            const heart = document.createElement("div");
            heart.className = "floating-heart-particle";
            heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
            heart.style.left = `${originX + (Math.random() - 0.5) * 60}px`;
            heart.style.top = `${originY + (Math.random() - 0.5) * 40}px`;
            heart.style.fontSize = `${1.3 + Math.random() * 1.5}rem`;

            const driftX = (Math.random() - 0.5) * 220;
            heart.style.setProperty("--drift-x", `${driftX}px`);

            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 2800);
        }
    });
}

/* ==========================================================================
   10. SECTION 6 — SUNFLOWER MOMENT & 5-CLICK SECRET
   ========================================================================== */
function initSunflowerSection() {
    const sunflowerStage = document.getElementById("sunflower-interactive");
    const secretModal = document.getElementById("secret-sunflower-modal");
    const closeSecretBtn = document.getElementById("close-secret-btn");
    if (!sunflowerStage) return;

    let sunflowerClicks = 0;
    let clickTimeout = null;

    sunflowerStage.addEventListener("click", () => {
        sunflowerClicks++;

        // Tiny bounce
        sunflowerStage.style.transform = "scale(1.12) rotate(4deg)";
        setTimeout(() => {
            sunflowerStage.style.transform = "scale(1) rotate(0deg)";
        }, 250);

        // Little yellow sparkle
        spawnMiniSparkles(sunflowerStage);

        if (clickTimeout) clearTimeout(clickTimeout);
        clickTimeout = setTimeout(() => {
            sunflowerClicks = 0;
        }, 4000);

        // Secret Easter Egg reached!
        if (sunflowerClicks >= 5) {
            sunflowerClicks = 0;
            if (secretModal) {
                secretModal.classList.add("active");
                spawnPetalBurst();
            }
        }
    });

    if (closeSecretBtn && secretModal) {
        closeSecretBtn.addEventListener("click", () => {
            secretModal.classList.remove("active");
        });
    }
}

function spawnMiniSparkles(container) {
    const rect = container.getBoundingClientRect();
    for (let i = 0; i < 8; i++) {
        const spark = document.createElement("div");
        spark.className = "confetti-piece";
        spark.innerText = "✨";
        spark.style.left = `${rect.left + rect.width / 2 + (Math.random() - 0.5) * 80}px`;
        spark.style.top = `${rect.top + 60 + (Math.random() - 0.5) * 60}px`;
        spark.style.fontSize = "1.2rem";

        spark.style.setProperty("--x-end", `${(Math.random() - 0.5) * 120}px`);
        spark.style.setProperty("--y-end", `${-80 - Math.random() * 80}px`);
        spark.style.setProperty("--rot-end", "180deg");

        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 2000);
    }
}

/* ==========================================================================
   11. SECTION 8 — LONG DISTANCE TIMELINE SCROLL OBSERVER
   ========================================================================== */
function initTimelineObserver() {
    const items = document.querySelectorAll(".timeline-item");
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.2 });

    items.forEach((item) => observer.observe(item));
}

/* ==========================================================================
   12. SECTION 9 — MINI INTERACTIVE GAME (“CHOOSE YOUR VIBE”)
   ========================================================================== */
function initVibeGame() {
    const buttons = document.querySelectorAll(".vibe-btn");
    const iconDisplay = document.getElementById("vibe-icon-display");
    const msgEl = document.getElementById("vibe-message");

    const vibeDiagnoses = {
        cozy: {
            icon: "☕",
            text: "“Okay, you're definitely a cozy-day person. Blankets, warm tea, and ignoring everyone's texts for 6 hours straight.”",
            theme: "vibe-cozy"
        },
        happy: {
            icon: "🌻",
            text: "“Exactly the energy I expected. Bringing sunshine even when the weather is completely grey.”",
            theme: "vibe-happy"
        },
        latenight: {
            icon: "🌙",
            text: "“Of course you picked this one. 2:00 AM thoughts, sudden life philosophies, and ‘are you still awake?’ messages.”",
            theme: "vibe-latenight"
        },
        chaotic: {
            icon: "✨",
            text: "“Yeah… that checks out 😂 Unhinged energy, 40 browser tabs open, and completely spontaneous decisions.”",
            theme: "vibe-chaotic"
        }
    };

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const vibeKey = btn.getAttribute("data-vibe");
            const data = vibeDiagnoses[vibeKey];
            if (!data) return;

            buttons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            // Update body vibe class
            document.body.className = `theme-default ${data.theme}`;

            // Animate card response
            if (iconDisplay) iconDisplay.textContent = data.icon;
            if (msgEl) {
                msgEl.style.opacity = "0";
                setTimeout(() => {
                    msgEl.textContent = data.text;
                    msgEl.style.opacity = "1";
                }, 200);
            }
        });
    });
}

/* ==========================================================================
   13. SECTION 10 — PHOTO REVEAL (CINEMATIC UNBLUR)
   ========================================================================== */
function initPhotoReveal() {
    const revealBtn = document.getElementById("trigger-reveal-btn");
    const img = document.getElementById("reveal-image");
    const blurOverlay = document.getElementById("blur-overlay");
    const caption = document.getElementById("revealed-caption");

    if (!revealBtn || !img) return;

    // Apply configuration
    img.onerror = () => {
        console.error("Failed to load reveal image:", REVEAL_PHOTO_CONFIG.image);
    };
    img.src = REVEAL_PHOTO_CONFIG.image;
    if (caption) caption.textContent = REVEAL_PHOTO_CONFIG.caption;

    revealBtn.addEventListener("click", () => {
        // Unblur image
        img.classList.remove("blurred");
        img.classList.add("revealed");

        // Hide overlay and button
        if (blurOverlay) blurOverlay.classList.add("hidden");
        revealBtn.classList.add("hidden");

        // Reveal caption
        if (caption) caption.classList.add("visible");

        // Celebrate with confetti
        spawnPetalBurst();
    });
}

/* ==========================================================================
   14. SECTION 11 — FINAL MESSAGE & REPLAY
   ========================================================================== */
function initFinaleObserver() {
    const finaleSection = document.getElementById("section-finale");
    const lines = document.querySelectorAll(".finale-line");
    const sunflower = document.getElementById("finale-sunflower");
    const signoff = document.querySelector(".finale-signoff");
    const replayBtn = document.getElementById("replay-btn");

    if (!finaleSection) return;

    let hasTriggered = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !hasTriggered) {
                hasTriggered = true;
                playFinaleSequence();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(finaleSection);

    function playFinaleSequence() {
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add("visible");
            }, index * 1200 + 400);
        });

        setTimeout(() => {
            if (sunflower) sunflower.classList.add("visible");
        }, lines.length * 1200 + 300);

        setTimeout(() => {
            if (signoff) signoff.classList.add("visible");
        }, lines.length * 1200 + 1000);
    }

    if (replayBtn) {
        replayBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });

            // Re-arm finale sequence for next visit
            setTimeout(() => {
                hasTriggered = false;
                lines.forEach((l) => l.classList.remove("visible"));
                if (sunflower) sunflower.classList.remove("visible");
                if (signoff) signoff.classList.remove("visible");
            }, 1000);
        });
    }
}

/* ==========================================================================
   15. LIGHTBOX MODAL FOR FULL PHOTOS
   ========================================================================== */
function initPhotoModal() {
    const modal = document.getElementById("photo-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    if (!modal) return;

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            modal.classList.remove("active");
        }
    });
}

function openPhotoModal(src, caption) {
    const modal = document.getElementById("photo-modal");
    const img = document.getElementById("modal-img");
    const captionEl = document.getElementById("modal-caption");

    if (!modal || !img) return;

    img.onerror = () => {
        console.error("Failed to load modal image:", src);
    };
    img.src = src;
    if (captionEl) captionEl.textContent = caption || "";
    modal.classList.add("active");
}
