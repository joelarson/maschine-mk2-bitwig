const CTRL = {
    TOPLEFT: {
        CONTROL: 85,
        STEP: 86,
        BROWSE: 87,
        SAMPLING: 88,
        ALL: 89,
        AUTO_WRITE: 90,
    },

    SCREENS: {
        // Buttons
        ARM: [46, 47, 48, 49, 50, 51, 52, 53],
        PREV_DEVICE: 54,
        NEXT_DEVICE: 57,
        PREV_PARAM_BANK: 58,
        NEXT_PARAM_BANK: 61,

        // Knobs
        VOL: [14, 15, 16, 17, 18, 19, 20, 21],
        PAN: [22, 23, 24, 25, 26, 27, 28, 29],
        MACRO: [30, 31, 32, 33, 34, 35, 36, 37],
        PARAM: [38, 39, 40, 41, 42, 43, 44, 45],
    },

    MASTER: {
        // Buttons
        VOLUME: 7,
        SWING: 9,
        TEMPO: 3,
        NOTE_REPEAT: 111,
        KNOB_PUSH: 102,
        LEFT: 98,
        RIGHT: 99,
        ENTER: 100,

        // Knobs
        KNOB: 101,
    },

    GROUPS: [80, 81, 82, 83, 91, 92, 93, 94],

    TRANSPORT: {
        RESTART: 104,
        LEFT: 105,
        RIGHT: 106,
        GRID: 107,
        PLAY: 108,
        REC: 109,
        ERASE: 110,
    },

    MIDDLE: {
        SCENE: 112,
        PATTERN: 113,
        PAD_MODE: 114,
        NAVIGATE: 115,
        DUPLICATE: 116,
        SELECT: 117,
        SOLO: 118,
        MUTE: 119,
    },

    PADS: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
};


const CTRLS = {
    TOPLEFT: {
        CHANNEL:  {ch: 1, d1: 21},
        PLUGIN:   {ch: 1, d1: 22},
        ARRANGE:  {ch: 1, d1: 23},
        MIX:      {ch: 1, d1: 24},
        BROWSE:   {ch: 1, d1: 25},
        SAMPLING: {ch: 1, d1: 26},
        ALL:      {ch: 1, d1: 27},
        AUTO:     {ch: 1, d1: 28},
        FS1:      {ch: 1, d1: 29},
        FS2:      {ch: 1, d1: 30},
    },

    METERS: {
        IN1:  {ch: 2, d1: 21},
        IN2:  {ch: 2, d1: 22},
        IN3:  {ch: 2, d1: 23},
        IN4:  {ch: 2, d1: 24},
        MST:  {ch: 2, d1: 25},
        GRP:  {ch: 2, d1: 26},
        SND:  {ch: 2, d1: 27},
        CUE:  {ch: 2, d1: 28},
        KNOB: {ch: 2, d1: 29},
    },

    PERFORMACE: {
        TAP:         {ch: 3, d1: 21},
        STEP_MODE:   {ch: 3, d1: 22},
        MACRO:       {ch: 3, d1: 23},
        NOTE_REPEAT: {ch: 3, d1: 24},
    },

    GROUPS: [
        {ch: 4, d1: 102},
        {ch: 4, d1: 103},
        {ch: 4, d1: 104},
        {ch: 4, d1: 105},
        {ch: 4, d1: 106},
        {ch: 4, d1: 107},
        {ch: 4, d1: 108},
        {ch: 4, d1: 109},
    ],

    TRANSPORT: {
        RESTART: {ch: 5, d1: 21},
        METRO:   {ch: 5, d1: 22},
        EVENTS:  {ch: 5, d1: 23},
        GRID:    {ch: 5, d1: 24},
        PLAY:    {ch: 5, d1: 25},
        REC:     {ch: 5, d1: 26},
        ERASE:   {ch: 5, d1: 27},
    },

    MIDDLE: {
        SCENE:     {ch: 6, d1: 21},
        PATTERN:   {ch: 6, d1: 22},
        PAD_MODE:  {ch: 6, d1: 23},
        NAVIGATE:  {ch: 6, d1: 24},
        DUPLICATE: {ch: 6, d1: 25},
        SELECT:    {ch: 6, d1: 26},
        SOLO:      {ch: 6, d1: 27},
        MUTE:      {ch: 6, d1: 28},
    },

    PADS: [
        {ch: 6, d1: 36},
        {ch: 6, d1: 37},
        {ch: 6, d1: 38},
        {ch: 6, d1: 39},
        {ch: 6, d1: 40},
        {ch: 6, d1: 41},
        {ch: 6, d1: 42},
        {ch: 6, d1: 43},
        {ch: 6, d1: 44},
        {ch: 6, d1: 45},
        {ch: 6, d1: 46},
        {ch: 6, d1: 47},
        {ch: 6, d1: 48},
        {ch: 6, d1: 49},
        {ch: 6, d1: 50},
        {ch: 6, d1: 51},
    ],

    EDIT: {
        COPY:        {ch: 7, d1: 21},
        PASTE:       {ch: 7, d1: 22},
        NOTE:        {ch: 7, d1: 23},
        NUDGE:       {ch: 7, d1: 24},
        UNDO:        {ch: 7, d1: 25},
        REDO:        {ch: 7, d1: 26},
        QUANTIZE:    {ch: 7, d1: 27},
        CLEAR:       {ch: 7, d1: 28},
        JOG_DIAL:    {ch: 7, d1: 29},
        JOG_RING:    {ch: 7, d1: 30},
        BACK:        {ch: 7, d1: 102},
        LEFT_ARROW:  {ch: 7, d1: 103},
        RIGHT_ARROW: {ch: 7, d1: 104},
        ENTER:       {ch: 7, d1: 105},
    },

    SCREENS: {
        ARM: [
            {ch: 8, d1: 21},
            {ch: 8, d1: 22},
            {ch: 8, d1: 23},
            {ch: 8, d1: 24},
            {ch: 8, d1: 25},
            {ch: 8, d1: 26},
            {ch: 8, d1: 27},
            {ch: 8, d1: 28},
        ],

        PREV_DEVICE:     {ch: 10, d1: 21},
        NEXT_DEVICE:     {ch: 10, d1: 22},
        PARENT_DEVICE:   {ch: 10, d1: 23},
        CHILD_DEVICE:    {ch: 10, d1: 24},
        PREV_PARAM_BANK: {ch: 10, d1: 25},
        NEXT_PARAM_BANK: {ch: 10, d1: 28},

        VOL_TOUCH: [
            {ch: 8, d1: 102},
            {ch: 8, d1: 104},
            {ch: 8, d1: 106},
            {ch: 8, d1: 108},
            {ch: 8, d1: 110},
            {ch: 8, d1: 112},
            {ch: 8, d1: 114},
            {ch: 8, d1: 116},
        ],
        VOL: [
            {ch: 8, d1: 103},
            {ch: 8, d1: 105},
            {ch: 8, d1: 107},
            {ch: 8, d1: 109},
            {ch: 8, d1: 111},
            {ch: 8, d1: 113},
            {ch: 8, d1: 115},
            {ch: 8, d1: 117},
        ],

        PAN_TOUCH: [
            {ch: 9, d1: 102},
            {ch: 9, d1: 104},
            {ch: 9, d1: 106},
            {ch: 9, d1: 108},
            {ch: 9, d1: 110},
            {ch: 9, d1: 112},
            {ch: 9, d1: 114},
            {ch: 9, d1: 116},
        ],
        PAN: [
            {ch: 9, d1: 103},
            {ch: 9, d1: 105},
            {ch: 9, d1: 107},
            {ch: 9, d1: 109},
            {ch: 9, d1: 111},
            {ch: 9, d1: 113},
            {ch: 9, d1: 115},
            {ch: 9, d1: 117},
        ],

        MACRO_TOUCH: [
            {ch: 10, d1: 102},
            {ch: 10, d1: 104},
            {ch: 10, d1: 106},
            {ch: 10, d1: 108},
            {ch: 10, d1: 110},
            {ch: 10, d1: 112},
            {ch: 10, d1: 114},
            {ch: 10, d1: 116},
        ],
        MACRO: [
            {ch: 10, d1: 103},
            {ch: 10, d1: 105},
            {ch: 10, d1: 107},
            {ch: 10, d1: 109},
            {ch: 10, d1: 111},
            {ch: 10, d1: 113},
            {ch: 10, d1: 115},
            {ch: 10, d1: 117},
        ],

        PARAM_TOUCH: [
            {ch:11, d1: 102},
            {ch:11, d1: 104},
            {ch:11, d1: 106},
            {ch:11, d1: 108},
            {ch:11, d1: 110},
            {ch:11, d1: 112},
            {ch:11, d1: 114},
            {ch:11, d1: 116},
        ],
        PARAM: [
            {ch:11, d1: 103},
            {ch:11, d1: 105},
            {ch:11, d1: 107},
            {ch:11, d1: 109},
            {ch:11, d1: 111},
            {ch:11, d1: 113},
            {ch:11, d1: 115},
            {ch:11, d1: 117},
        ],
    },
};

const CONFIG = {
    DIM_VALUE: 20,
    EXTRA_DIM_VALUE: 10,
    GROUP_COUNT: 8,
    PAD_COUNT: 16,
};

var MOD = {
    SHIFT: false,
    NAVIGATE: false, 
    DUPLICATE: false, 
    SELECT: false, 
    SOLO: false, 
    MUTE: false,
    ERASE: false
};

var CLIPBOARD = null;