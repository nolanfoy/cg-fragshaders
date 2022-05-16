#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 new_tex = texcoord * 2.0 - 1.0;
    float radius = length(new_tex);
    vec2 offset = new_tex * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    vec2 final_tex = texcoord + offset;

    FragColor = texture(image, final_tex);
}
