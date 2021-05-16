import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {Button} from '../components/index';
import {theme} from '../styles/globalStyles';

const {backgroundColor} = theme;

export function withModal(WrappedComponent) {
  return props => {
    const [modalData, setModalData] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const showModal = data => {
      setModalData(data);
      setIsVisible(true);
    };

    const hideModal = () => {
      setIsVisible(false);
    };

    const onButtonPress = onButtonPress => {
      setIsVisible(false);
      if (onButtonPress) {
        onButtonPress();
      }
    };

    const ModalWrapper = props => {
      const {children, onClose} = props;
      return (
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.rootContainer}>
            <TouchableWithoutFeedback onPress={null}>
              <View style={styles.dialogInnerStyle}>{children}</View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      );
    };

    const DialogWindow = ({
      onClickButton,
      onClose,
      btnTitle,
      dialogContent,
      dialogTitle,
      contentView,
    }) => {
      return (
        <ModalWrapper onClose={onClose}>
          {dialogTitle ? <Text style={styles.title}>{dialogTitle}</Text> : null}
          {dialogContent ? (
            <Text style={styles.content}>{dialogContent}</Text>
          ) : null}
          {contentView ? contentView : null}
          <Button
            style={styles.fullWidth}
            title={btnTitle}
            onPress={onClickButton}
          />
        </ModalWrapper>
      );
    };

    const dialogView = (
      <View style={{width: '100%', height: '100%'}}>
        <DialogWindow
          onClickButton={() => {
            onButtonPress(modalData?.onButtonPress);
          }}
          onClose={() => hideModal()}
          btnTitle={modalData?.buttonTitle || 'Ok'}
          dialogContent={modalData?.contentView ? null : modalData?.content}
          dialogTitle={modalData?.title || 'Title'}
          contentView={modalData?.contentView || ''}
        />
      </View>
    );

    return (
      <View style={{flex: 1}}>
        <Modal visible={isVisible} transparent={true} animationType="fade">
          {dialogView}
        </Modal>
        <WrappedComponent {...props} showModal={showModal} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  iconWrapper: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  dialogInnerStyle: {
    backgroundColor: backgroundColor,
    width: '80%',
    padding: 25,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  content: {
    marginBottom: 20,
    fontSize: 22,
  },
  fullWidth: {
    width: '100%',
  },
});
