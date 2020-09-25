FROM registry.michelada.io/michelada/dockerfiles/ci/rails:2.7.1

COPY id_rsa.pub /root/.ssh/id_rsa.pub
COPY id_rsa /root/.ssh/id_rsa
