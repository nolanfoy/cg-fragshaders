#version 300 es

precision mediump float;

in vec2 texcoord;


uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 new_tex = texcoord * 2.0 - 1.0;
    float theta = atan(new_tex.y, new_tex.x);
    float radius = pow(length(new_tex), 1.5);
    vec2 fisheye_coord;
    fisheye_coord.x = radius * cos(theta);
    fisheye_coord.y = radius * sin(theta);
    vec2 final_tex = 0.5 * (fisheye_coord + 1.0);
    FragColor = texture(image, final_tex);

}

